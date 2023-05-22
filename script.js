function computerInput() {

    let inp = Math.floor((Math.random() * 3) + 1);
    if(inp == 1) return 'rock';
    else if(inp == 2) return 'paper';
    else return 'scissor';
    

}

function game(userInput) {

    let c = computerInput();

    if(userInput == 'rock' && c == 'rock') {
        alert(`user input: ${userInput}, computer input: ${c}`)
        alert("game draw");
    }
    else if(userInput == 'rock' && c == 'paper') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("computer won");
    }
    else if(userInput == 'rock' && c == 'scissor') {
        alert(`user input: ${userInput}, computer input: ${c}`)
        alert("user won");
    }
    else if(userInput == 'paper' && c == 'rock') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("user won");
    }
    else if(userInput == 'paper' && c == 'paper') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("game draw");
    }
    else if(userInput == 'paper' && c == 'scissor') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("computer won");
    }
    else if(userInput == 'scissor' && c == 'rock') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("computer won");
    }
    else if(userInput == 'scissor' && c == 'paper') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("user won");
    }
    else if(userInput == 'scissor' && c == 'scissor') {
        alert(`user input: ${userInput}, computer input: ${c}`);
        alert("game draw");
    }

}

let user = prompt("enter rock, paper or scissor");

game(user);