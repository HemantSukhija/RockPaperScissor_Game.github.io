let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function converttoword(letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissor";
    return "Paper";
}
function win(user, computer) {
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const user_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converttoword(user)}${smallUserword} beats ${converttoword(computer)}${smallCompword}.You win!🙋`;
    user_div.classList.add('green-glow');
    setTimeout(function () { user_div.classList.remove('green-glow') }, 300)
}
function lose(user, computer) {
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const user_div = document.getElementById(user);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converttoword(user)}${smallUserword} loses to ${converttoword(computer)}${smallCompword}.You lose💩`;
    user_div.classList.add('red-glow');
    setTimeout(function () { user_div.classList.remove('red-glow') }, 300)
}

function draw(user, computer) {
    const smallUserword = "user".fontsize(3).sup();
    const smallCompword = "comp".fontsize(3).sup();
    const user_div = document.getElementById(user);
    result_p.innerHTML = `${converttoword(user)} ${smallUserword} equals ${converttoword(computer)} ${smallCompword}.Its a draw`;
    user_div.classList.add('grey-glow');
    setTimeout(function () { user_div.classList.remove('grey-glow') }, 300)

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;

    }
}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });
    paper_div.addEventListener('click', function () {
        game("p");
    });
    scissors_div.addEventListener('click', function () {
        game("s");
    });

}
main();