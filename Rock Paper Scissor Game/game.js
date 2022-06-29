const game = function(){
    let Pscore=0;
    let Cscore=0;

//start the game
    const startGame = function(){
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", function(){
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play Match
    const playMatch = function(){
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(function(options){
                options.addEventListener("click", function(){
                    //computer Choice
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[computerNumber];
                    //console.log(computerChoice);  
                    compareHands(this.textContent, computerChoice);
                    //update images
                    playerHand.src = `./Assets/${this.textContent}`.png;
                    computerHand.src = `./Assets/${computerChoice}`.png;

                });
        });

       // const computerNumber = Math.floor(Math.random() * 3);
        //console.log(computerNumber);
    };

    //getting scores
    const updateScore = function(){
        const playerScore = document.querySelector(".player.score p");
        const computerScore = document.querySelector(".computer-score");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = function(playerChoice, computerChoice){
        //update text
        const winner = document.querySelector(".winner");
        //checking for a textDecorationSkip: 
        if(playerChoice === computerChoice){
            winner.textContent ="It is a tie";
            return;
        };
        //check for rock
        if(playerChoice === "rock"){
          if(computerChoice === "scissors"){
            winner.textContent = "player wins";
            pScore++;
            updateScore();
            return;
          } else{
            winner.textContent = "computer Wins";
            cScore++
            updateScore();
            return;
          }

        }
        //check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
              winner.textContent = "computer wins";
              cScore++;
              updateScore();
              return;
            } else{
              winner.textContent = "player Wins";
              pScore++;
              updateScore();
              return;
            }
  
          }
          //check for scissors
          if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
              winner.textContent = "computer wins";
              cScore++;
              updateScore();
              return;
            } else{
              winner.textContent = "player Wins";
              pScore++;
              updateScore();
              return;
            }
  
          }

    };



    //call the inner function
    startGame();
    playMatch();
};



//the big container game function
game();