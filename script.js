const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const newGame = document.querySelector(".new");
const message = document.querySelector(".message");
const text = document.querySelector(".new-container");





let turnO = true;

const winPattern = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8],
[2, 4, 6]

];
//reset game
const resetGame = () =>{
    turnO=true;
    enableBox();
    text.classList.remove("show");
}

//disabled boxes
const disableBox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//enabled boxes
const enableBox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

//check winner
const checkWinner = () =>{
   
    for(let pattern of winPattern){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

       if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
          setTimeout(()=>{
            //show winner
            text.classList.add("show");
            message.innerHTML=`Winner is ${pos1}`;
          }, 1000);
          disableBox();
          
        }
       }

     }
}

//select box 
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(turnO){
            //player-O
            box.innerHTML="O";
           box.classList.add("textO")
            turnO=false;
           
        }
        else{
            //player-X
            box.innerHTML="X";
            box.classList.add("textX")
            turnO=true;
            
        }
        box.disabled=true;
       checkWinner();

    });
});
resetBtn.addEventListener("click" , resetGame);
newGame.addEventListener("click" , resetGame);