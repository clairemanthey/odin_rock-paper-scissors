let startBtn = document.getElementById("start-btn");
let resultsDisplay = document.getElementById("results");
let gameOver = document.getElementById("game-over");
let rockIcon = document.getElementById('rock');
let paperIcon = document.getElementById('paper');
let scissorsIcon = document.getElementById('scissors');
let playerSelection = "";
let next = document.getElementById("next-btn");
let choose = document.getElementById("choose");

rockIcon.addEventListener("click", () =>{
	console.log("rock");
	playerSelection = "rock";
});

paperIcon.addEventListener("click", () => {
	console.log("paper");
	playerSelection = "paper";
});

scissorsIcon.addEventListener("click", () => {
	console.log("scissors")
	playerSelection = "scissors"
})

function getComputerChoice(){
	let randomNumber = Math.floor(Math.random() * 3);
	switch(randomNumber){
		case 0:
		  return "rock";
		case 1:
		  return "paper";
		case 2:
		  return "scissors";
	}
}




function playRound(playerSelection, computerSelection){

	if(playerSelection === "rock" && computerSelection === "scissors"){
        resultsDisplay.innerHTML = "You win, rock beats scissors";
        console.log(resultsDisplay);
		return "You win, rock beats scissors";
	}else if(playerSelection === "rock" && computerSelection === "paper"){
		resultsDisplay.innerHTML = "You lose, paper beats rock";
		console.log(resultsDisplay);
		return "You lose, paper beats rock";
	}else if(playerSelection === "paper" && computerSelection === "scissors"){
		resultsDisplay.innerHTML = "You lose, scissors beat paper";
		console.log(resultsDisplay);
		return "You lose, scissors beat paper";
	}else if(playerSelection === "paper" && computerSelection === "rock"){
		resultsDisplay.innerHTML = "You win, paper beats rock";
		console.log(resultsDisplay);
		return "You win, paper beats rock";
	}else if(playerSelection === "scissors" && computerSelection === "rock"){
		resultsDisplay.innerHTML = "You lose, rock beat scissors";
		console.log(resultsDisplay);
		return "You lose, rock beat scissors";
	}else if(playerSelection === "scissors" && computerSelection === "paper"){
		resultsDisplay.innerHTML = "You win, scissors beats paper"
		console.log(resultsDisplay);
		return "You win, scissors beats paper";
	}else if(playerSelection === computerSelection){
		resultsDisplay.innerHTML = "It's a tie"
		console.log(resultsDisplay);
		return "It's a tie"
	}

}

startBtn.addEventListener("click", function(){
	getComputerChoice();
	let computerSelection = getComputerChoice();
	console.log(computerSelection)
	playRound(playerSelection, computerSelection);
	choose.classList.add("hidden");
});

next.addEventListener("click", () => {
	choose.classList.remove("hidden");	
    playerSelection = " ";
    resultsDisplay.innerHTML = "";
    computerSelection = "";
})


