let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn-restat");
let newGameBtn = document.querySelector("#btn-new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPatt = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const restatGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "o";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWin();
    });

});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
    const enableBoxes  = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    }

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWin = () => {
    for (let patt of winPatt) {
        let pos1val = boxes[patt[0]].innerText;
        let pos2val = boxes[patt[1]].innerText;
        let pos3val = boxes[patt[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);

            }
        }
    }
};
newGameBtn.addEventListener("click", restatGame);
resetbtn.addEventListener("click", restatGame);