let userScore = 0 ;

let compScore = 0 ;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    //rock , paper , scissore

    let options =["rock", "paper" , "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
  console.log("game was draw.");
  msg.innerText ="Draw the game Please try again..";
  msg.style.backgroundColor = "#081b31";
}

const showWinner =(userWin , userChoice , compChoice)=>{
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("You Win");
    msg.innerText =`You Win..!Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You lose");
    msg.innerText =`You Lose hahaha..! ${compChoice} beats Your  ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice)=>{
    console.log("userChoice = " , userChoice);
    //genrate computer choice => module
    const compChoice = genCompChoice();
    console.log("compuetr choice = " , compChoice);

    if(userChoice === compChoice){
      //draw
      drawGame();
    }else{
      let userWin = true;
      if(userChoice==="rock"){

       userWin = compChoice === "paper" ? false : true;
      }
      else if(userChoice === "paper"){
        //rock , scissors
        userWin = compChoice === "scissors" ? false :true;
      }
      else{
        //rock,paper
        userWin =  compChoice ==="rock" ? false: true;
      }
      showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) =>{
  // console.log(choice); 
    choice.addEventListener("click" , () =>{
      // console.log("choice was cliked");
      const userChoice = choice.getAttribute("id");
      // console.log("choice was cliked" , userChoice);
      playGame(userChoice);
    })
})