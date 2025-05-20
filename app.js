
let btnClass=document.querySelectorAll(".btnClass");
let msgClass=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let resetBtn=document.querySelector(".reset-button");
let newBtn=document.querySelector(".new-button");
let turn0=true;
const winPatterns=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
];

let reset=()=>{
    turn0=true;
    enableBtn();
    msgContainer.classList.add("hide");
    btnClass.forEach(box=>{
        box.innerText="";
    });
// Remove the extra closing curly brace
};
const enableBtn=()=>{
    for (let box of btnClass){
        box.disabled=false;
    }
};
const disableBtn=()=>{
    for (let box of btnClass){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msgClass.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};
const checkWinner=()=>{
    for(pattern of winPatterns){
        let posValue1=btnClass[pattern[0]].innerText;
        let posValue2=btnClass[pattern[1]].innerText;
        let posValue3=btnClass[pattern[2]].innerText;
   
    if(posValue1 !="" && posValue2 !="" && posValue3 !=""){
        if(posValue1===posValue2 && posValue2===posValue3){
            showWinner(posValue1);
        }
    }
}
};
btnClass.forEach(box => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.textContent = "X";
            turn0 = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

newBtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);

