let userScore=0;
let compScore=0;
let moves=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userSCOREPARA=document.querySelector("#user-score");
const compSCOREPARA=document.querySelector("#Comp-score");
const compmsg=document.querySelector("#compmsg");
const MOVES=document.querySelector("#MOVES");
const who=document.querySelector("#who");

function gencompchoice() {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    compmsg.innerText=`${options[randIdx]}`;
    moves++;
    MOVES.innerText=moves;
    if(moves==10 && userScore>compScore)
       { who.innerText="WINNER IS YOU";}
    else if(moves==10 && userScore<compScore)
    {
        who.innerText="WINNER IS COMP";
    }
    return options[randIdx];
}

const drawgame=()=>{
    console.log("THE GAME WAS DRAW");
    msg.innerText="THE GAME WAS DRAW";
    msg.style.backgroundColor="rgb(101, 210, 210)";
}

const showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin===true){
        userScore++;
        userSCOREPARA.innerText=userScore;    
    console.log("YOU WIN !");
    msg.innerText="YOU WIN !";
    msg.style.backgroundColor="green";
    }else{
        compScore++;
        compSCOREPARA.innerText=compScore; 
        console.log("YOU LOSE ");
        msg.innerText="YOU LOSE !";
        msg.style.backgroundColor="red";
    }

}


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compchoice=gencompchoice();
    console.log("computer choice=",compchoice);
    if(userChoice === compchoice){
        drawgame();
    } else {
        let userwin=true;
        if(userChoice ==="rock"){
          userwin = compchoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userwin= compchoice==="scissor"? false:true;
        }
        else {
            userwin= compchoice==="rock"? false:true;
          }
          showwinner(userwin ,userChoice,compchoice);
        
         }
        };

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
