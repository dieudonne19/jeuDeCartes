const congrats = require("./congratMessage");
const restartGame = require("./restartGame");

/**
 * 
 * @param {number[]} array 
 */

// le "array" io le tableau "result"
function condition(you, array) { //comparena le index0 sy index1
    // le index0 le point du joueur
    // le index1 le point du robot
    if (array[0] < array[1]) {
        congrats.congratRobot()
    }else if (array[0] > array[1]) {
        congrats.congratYou(you)
    }else {
        console.log(
            `:::::::::::::::::::::::::::::::::::::::\n
:::::::::::::😅 EGALITE😅 ::::::::::::\n
:::::::::::::::::::::::::::::::::::::::`
        );
        restartGame.restartGame()
    }
}

exports.condition = condition
