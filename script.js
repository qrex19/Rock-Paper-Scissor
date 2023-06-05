//function to generate random option
function computerInput() {
  let inp = Math.floor(Math.random() * 3 + 1);
  if (inp == 1) return "rock";
  else if (inp == 2) return "paper";
  else return "scissor";
}

const body = document.querySelector("body");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
var gameNumber = 0;

//answer prompt styling
const promptColor =
  "width: 100%; font-size: larger; background-color: #F97B22; border-radius: 30px; text-align: center;";

//returns user or computer or draw
function winner(userInput, cImp) {
  if (userInput == "rock" && cImp == "rock") {
    return "draw";
  } else if (userInput == "rock" && cImp == "paper") {
    return "computer";
  } else if (userInput == "rock" && cImp == "scissor") {
    return "user";
  } else if (userInput == "paper" && cImp == "paper") {
    return "draw";
  } else if (userInput == "paper" && cImp == "rock") {
    return "user";
  } else if (userInput == "paper" && cImp == "scissor") {
    return "computer";
  } else if (userInput == "scissor" && cImp == "scissor") {
    return "draw";
  } else if (userInput == "scissor" && cImp == "rock") {
    return "computer";
  } else if (userInput == "scissor" && cImp == "paper") {
    return "user";
  }
}

//event listeners

var machineInp = computerInput();

rock.addEventListener("click", function run() {
  if (gameNumber != 0) {
    return;
  }

  gameNumber = gameNumber + 1;

  const machineInp = computerInput();

  const win = winner("rock", machineInp);

  rock.style.cssText = "background-color: #D0F5BE";

  const prompt = document.createElement("p");
  prompt.innerHTML = `you: rock,  computer: "${machineInp}",  winner: "${win}", <br> Refresh to play again`;

  prompt.style.cssText = promptColor;

  body.append(prompt);

  console.log(machineInp);
  console.log(win);
});

paper.addEventListener("click", function run() {
  if (gameNumber != 0) {
    return;
  }
  gameNumber = gameNumber + 1;

  const machineInp = computerInput();

  const win = winner("paper", machineInp);

  paper.style.cssText = "background-color: #D0F5BE";

  const prompt = document.createElement("p");
  prompt.innerHTML = `you: paper,  computer: "${machineInp}",  winner: "${win}" <br> Refresh to play again`;

  prompt.style.cssText = promptColor;

  body.append(prompt);

  console.log(machineInp);
  console.log(win);
});

scissor.addEventListener("click", function run() {
  if (gameNumber != 0) {
    return;
  }

  gameNumber = gameNumber + 1;

  const machineInp = computerInput();

  const win = winner("scissor", machineInp);

  scissor.style.cssText = "background-color: #D0F5BE";

  const prompt = document.createElement("p");
  prompt.innerHTML = `you: scissor,  computer: "${machineInp}",  winner: "${win}" <br> Refresh to play again`;

  prompt.style.cssText = promptColor;

  body.append(prompt);

  console.log(machineInp);
  console.log(win);
});