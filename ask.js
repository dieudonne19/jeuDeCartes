const choice = require('./choice');

const prompt = require('prompt-sync')()

function ask(totalPoints, user){
    console.log("1 - Jouer");
    console.log("2 - Quitter");

    let reponse = +prompt("Voulez-vous jouer ? ")

    if (reponse == 1) {
        console.log("Alors bonne chance !");
        choice.choice(user, totalPoints)

    } else if (reponse == 2) {
        console.log("Mercii à la prochaine fois");
    }
}
// ask()
exports.ask = ask