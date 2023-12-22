const playGame = require("./play");
const prompt = require('prompt-sync')()


function restart() {
    let ask = prompt(`Voulez-vous recommencer ? `)

    if (ask == 'oui') {
        playGame.playGame()
    }else {
        console.log(
            `SEE YOU SOON 🤝🤝!`
        );
    }
    
}
exports.restartGame = restart