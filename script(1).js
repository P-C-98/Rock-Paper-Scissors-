
console.log("Rock-Paper-Scissors game loaded");

//computer choice function
//score and variable tracker

let humanScore = 0;
let computerScore = 0;

//computer choice (random num generator)
//repeats game 5

for(let i = 0; i < 5; i++)
{
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];

        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

//human choice (text input)

    function getHumanChoice() {
        const humanChoice = (prompt)("Type rock, paper of scissors").toLowerCase();
        return humanChoice;
    }

    const computer = getComputerChoice();
    const human = getHumanChoice();

//human and computer output

    console.log("Computer Chose:", computer);
    console.log("Human Chose:", human);

//single round logic

        function playRound(humanSelection, computerSelection) { 

        if (
            (humanSelection == 'rock' && computerSelection == 'rock') ||
            (humanSelection == 'paper' && computerSelection == 'paper') ||
            (humanSelection == 'scissors' && computerSelection == 'scissors')
        ) {
            console.log("It's a tie!");

        } else if (
            (humanSelection == 'rock' && computerSelection == 'scissors') ||
            (humanSelection == 'paper' && computerSelection == 'rock') || 
            (humanSelection == 'scissors' && computerSelection == 'paper')
        ) {
            console.log("You win!");
            return humanScore += 1;

        } else {
            console.log("Computer wins!")
            return computerScore += 1;
        }
            
    }
        const humanSelection = (human);
        const computerSelection = (computer);

        playRound (humanSelection, computerSelection);
    
    console.log(humanScore)
    console.log(computerScore)
}