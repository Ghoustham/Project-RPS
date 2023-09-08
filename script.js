console.log ("hello world");

// CREATE A FUNCTION CALLED getComputerChoice that will randomly return either rock, paper or scissors.

function getComputerChoice (){
    let computerSelection = "";
   
    let randomNumber = Math.floor (Math.random()*10)
   
    if (randomNumber <= 3){
   
        computerSelection = "Rock";
   
    } else if (randomNumber >3 && randomNumber <= 6){

        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    
    
    return console.log (computerSelection, randomNumber);

}

getComputerChoice();

//CREATE A FUNCTION CALLED playerSelection THAT WILL CHOICE RETURN EITHER ROCK, PAPER, SCISSORS.
// CREATE A FUNCTION THAT TAKE TWO PARAMETERS playerSelection and getComputerChoice AND RETURN A STRING THAT DECLARES WIN OR LOSE.
// CREATE A FUNCTION CALLED game ALLOW US TO PLAY A 5 ROUND GAMES.   