let btn = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    let turnO = true;
    count = 0;
    enableBtns();
    msgContainer.classList.add("hide");
}

const enableBtns = () => {
    for(let box of btn){
        box.disabled= false;
        box.innerText = "";
    }
}
const gameDraw = () =>{
    msg.innerText = ` Game is Draw`
    msgContainer.classList.remove("hide");
    disabledBtns();
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

btn.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }

    });
});

const disabledBtns = () => {
    for(let button of btn){
        button.disabled = true;
    }
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                msgContainer.classList.remove("hide");
                msg.innerText = ` Cngratulation Winner is ${pos1Val}`
                disabledBtns();
                
            }
        }
    }

};

