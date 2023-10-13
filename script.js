console.log ("Let's Play a Game");

// CREATE A FUNCTION CALLED getComputerChoice that will randomly return either rock, paper or scissors.

function getComputerChoice (){
    let ArrayOfRockPaperScissors = ['Rock','Paper','Scissors'];
    let randomString = Math.floor (Math.random()*ArrayOfRockPaperScissors.length);
    
    return ArrayOfRockPaperScissors[randomString];
}


//CREATE A FUNCTION CALLED playerSelection THAT WILL CHOICE RETURN EITHER ROCK, PAPER, SCISSORS.

let buttonPressing = '';
let playerAnswer = document.querySelectorAll("button");

playerAnswer.forEach(buttons => {


    buttons.addEventListener('click', (e)=>{
        let computerChoice = getComputerChoice();

        buttonPressing = buttons.id
        let valueOfPlayerSelection = playerSelection(buttonPressing);
        winnerSelection(valueOfPlayerSelection, computerChoice);
        createScore(scorePlayer, scoreComputer);
        finalWinner (scorePlayer, scoreComputer);
    })
    
});

function playerSelection(buttonPressing){
    let choicePlayer = "";

    switch(buttonPressing){
        case 'rock':
            choicePlayer = 'Rock';
            break;
        case 'paper':
            choicePlayer = 'Paper';
            break;
        case 'scissors':
            choicePlayer = 'Scissors';
            break;
        
        }
    let playerChoice = choicePlayer.toLocaleLowerCase();
    return playerChoice;
}

let scorePlayer = +("");
let scoreComputer = +("");

// CREATE A FUNCTION THAT TAKE TWO PARAMETERS playerSelection and getComputerChoice AND RETURN A STRING THAT DECLARES WIN OR LOSE.
function winnerSelection (valueOfPlayerSelection, computerChoice ){
    
    
    let lowerComputer = computerChoice.toLowerCase();
    console.log (lowerComputer);
    console.log (`the player choice: ${valueOfPlayerSelection}`);
    
    
    if (valueOfPlayerSelection === "scissors" && lowerComputer === "rock"){
        

        console.log (`You Lose: rock beats scissors`);
        scoreComputer+=1;

        console.log (`Other point to computer, the total score is${scoreComputer}`);


    }else if (valueOfPlayerSelection === "paper" && lowerComputer === "scissors"){
        scoreComputer+=1;
        console.log (`You Lose: scissors beats paper`);
        console.log (`Other point to computer, the total score is${scoreComputer}`);

            
    }else if (valueOfPlayerSelection === "rock" && lowerComputer === "paper") {
        console.log (`You Lose: paper beats rock`);
        scoreComputer+=1;
    
        console.log (`Other point to computer, the total score is: ${scoreComputer}`);

    }else if (valueOfPlayerSelection === lowerComputer){
        console.log ("WE HAVE A TIE");  
    
    }else {
        console.log ("You win bro");
        scorePlayer+=1;
        console.log(`Other point to PLayer, the total score is: ${scorePlayer}`);
        }
        
    
    
    return;
}

let finalWinner = (scorePlayer, scoreComputer) => {

    if(scorePlayer === 5){
        alert('THE WINNER IS: THE PLAYER');

    }else if (scoreComputer === 5){
        alert('THE WINNER IS: THE COMPUTER');

    }
}

let createScore = (scorePlayer, scoreComputer)=>{
    
    divSelector = document.querySelector('div');
    while (divSelector.firstChild){
        divSelector.removeChild(divSelector.firstChild);
    }

    let textScoreComputer = document.createTextNode('Computer Score: ' + scoreComputer);
    let textScorePlayer = document.createTextNode('Player Score: ' + scorePlayer)
    divSelector.append(textScorePlayer, textScoreComputer);
}



//winnerSelection (playerChoice, computerChoice);




//winnerSelection (playerChoice, computerChoice);


//CREATE A FUNCTION CALLED game ALLOW US TO PLAY A 5 ROUND GAMES.   

// create a loop to repeat de game for 5 times 
    
