var userhandSign = document.getElementById("userhandSign");
var computerhandSign = document.getElementById("computerhandSign");

userScoreBox = document.getElementById("userScore");
botScoreBox = document.getElementById("botScore");

userScore = 0;
botScore = 0;

var rockLogo = document.getElementById("rocklogo");
var paperLogo = document.getElementById("paperlogo");
var scissorLogo = document.getElementById("scissorlogo");

let operator;

function computerChoice() {
  operator = Math.ceil(Math.random() * 3);
  console.log(operator);

  switch (operator) {
    case 1:
      computerhandSign.setAttribute("src", "./assets/rock-hand.png");
      break;

    case 2:
      computerhandSign.setAttribute("src", "./assets/paper-hand.png");
      break;

    case 3:
      computerhandSign.setAttribute("src", "./assets/scissors-hand.png");
      break;
  }
}

// Rock Function
rockLogo.onclick = () => {
  userhandSign.setAttribute("src", "./assets/rock-hand.png");
  computerChoice();

  if (operator == 2) {
    botScore += 1;
  } else if (operator == 3) {
    userScore += 1;
  }

  userScoreBox.innerHTML = userScore;
  botScoreBox.innerHTML = botScore;
  gameEnd();
};

// Paper Function
paperLogo.onclick = () => {
  userhandSign.setAttribute("src", "./assets/paper-hand.png");
  computerChoice();
  if (operator == 1) {
    botScore += 1;
  } else if (operator == 3) {
    userScore += 1;
  }

  userScoreBox.innerHTML = userScore;
  botScoreBox.innerHTML = botScore;
  gameEnd();
};

// Scissors Function
scissorLogo.onclick = () => {
  userhandSign.setAttribute("src", "./assets/scissors-hand.png");
  computerChoice();
  if (operator == 1) {
    botScore += 1;
  } else if (operator == 2) {
    userScore += 1;
  }

  userScoreBox.innerHTML = userScore;
  botScoreBox.innerHTML = botScore;
  gameEnd();
};

// Game end logic

let winning = document.getElementById("won_text");
let body = document.querySelector("body");
let playAgainButton = document.getElementById("play_again_button");
let gameEndPage = document.getElementById("game_end");
function gameEnd() {
  if (userScore == 5 || botScore == 5) {
    rockLogo.style.visibility = "hidden";
    paperLogo.style.visibility = "hidden";
    scissorLogo.style.visibility = "hidden";
  }
  if (userScore == 5) {
    winning.textContent = "You won the game";
    gameEndPage.style.visibility = "visible";
  } else if (botScore == 5) {
    winning.textContent = "Computer won the game";
    body.style.overflowY = "scroll";
    gameEndPage.style.visibility = "visible";
  }
  playAgainButton.onclick = () => {
    window.open("./game.html", "_self");
  };
}
