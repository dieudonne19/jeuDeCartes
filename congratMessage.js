

function congratYou(you) {
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