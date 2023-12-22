

function congratYou(you) { // le parametre "you" io akana anle pseudo anle joueur fotsiny
    console.log(
        `:::::::::::::::::::::::::::::::::::::::\n
::::::::......🎉${you} WIN ...........\n
:::::::::::::::::::::::::::::::::::::::`
    );
}


function congratRobot() {
    console.log(
        `:::::::::::::::::::::::::::::::::::::::\n
::::::::....🎉ROBOT WIN !.............\n
:::::::::::::::::::::::::::::::::::::::`
    );
}

exports.congratYou = congratYou
exports.congratRobot = congratRobot
