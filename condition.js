const congrat = require("./congratMessage")
const restart = require("./restartGame")


/**
 * 
 * @param {number[]} result 
 */
function condition(result) { //comparena le index0 sy index1
    // le index0 le point du joueur
    // le index1 le point du robot
    if (result[0] < result[1]) {
        congrat.congratRobot()
    }else if (result[0] > result[1]) {
        congrat.congratYou()
    }else {
        console.log(
            `:::::::::::::::::::::::::::::::::::::::\n
:::::::::::::😅 EGALITE😅 ::::::::::::\n
:::::::::::::::::::::::::::::::::::::::`
        )
        restart.restart()
    }
}

exports.condition = condition