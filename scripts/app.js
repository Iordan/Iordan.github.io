let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices [randomNumber];
}

function win(userChoice,computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
	result_p.innerHTML = userChoice.style.color = "blue";
}

function lose(userChoice,computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + " loses to " + computerChoice + ". You lost!";
}

function draw(userChoice,computerChoice) {
	result_p.innerHTML = userChoice + " equals " + computerChoice + ". It's a draw.";
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("rock");
	})

	paper_div.addEventListener('click', function() {
		game("paper");
	})

	scissors_div.addEventListener('click', function() {
		game("scissors");
	})
}

main();