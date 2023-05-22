function computerInput() {

    let inp = Math.floor((Math.random() * 3) + 1);
    if(inp == 1) return 'rock';
    else if(inp == 2) return 'paper';
    else return 'scissor';
    

}

function game(userInput) {

    let c = computerInput();

    if(userInput == 'rock' && c == 'rock') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("game draw");
    }
    else if(userInput == 'rock' && c == 'paper') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("computer won");
    }
    else if(userInput == 'rock' && c == 'scissor') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("user won");
    }
    else if(userInput == 'paper' && c == 'rock') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("user won");
    }
    else if(userInput == 'paper' && c == 'paper') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("game draw");
    }
    else if(userInput == 'paper' && c == 'scissor') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("computer won");
    }
    else if(userInput == 'scissor' && c == 'rock') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("computer won");
    }
    else if(userInput == 'scissor' && c == 'paper') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("user won");
    }
    else if(userInput == 'scissor' && c == 'scissor') {
        console.log(`user input: ${userInput}, computer input: ${c}`);
        console.log("game draw");
    }

}

let user = prompt("enter rock, paper or scissor");

console.log(game(user));