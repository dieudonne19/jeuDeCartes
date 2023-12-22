const calculResult = require("./calculateResult");
const condition = require("./condition");
const displayResult = require("./displayResult");
const round = require("./round");
const welcome = require("./welcome");
const prompt = require('prompt-sync')()

function playGame () {
    welcome.welcome()

    let user = prompt("Enter votre pesudo : ")

    let totalPoints = [];

    let manche = 0

    while(manche < 3) {
        round.round(totalPoints, user)
        manche++
    }

    let result = calculResult.calculResult(totalPoints)    
    
    displayResult.displayResult(result)
    
    condition.condition(result)
}

exports.playGame = playGame