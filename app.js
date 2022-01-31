//let's cash the DOM. Cashing means storing something for future. We store below in variables so we can use it later.
let userScore = 0;
let computerScore = 0;
//html variables that store DOM elements.since in html doc it is put in span tags that is why it is named like that:
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); //we want it to be inside p tag
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//we will asign r,p,s to 1,2,3 
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); //it will give random number between 0-3
    return choices[randomNumber];
}

//since we don't want result to be shown as e.g. r beats s, we will convert it to proper words by writing a function
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++; //makes score go up
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function loose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} looses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw ↔️`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

//chosen value will be compared with a choice of computer and result will be returned
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            case "rp":
            case "ps":
            case "sr":
                loose(userChoice, computerChoice);
                break;
                case "rr":
                case "pp":
                case "ss":
                    draw(userChoice, computerChoice);
                    break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();