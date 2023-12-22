const robot = require("./IA");
const prompt = require('prompt-sync')()


function choice(user, totalPoints){
    let cards = ["eau", "feu", "plante"]
    console.log("1 - eau");
    console.log("2 - feu");
    console.log("3 - plante");

    let reply1 = +prompt("Veuillez choisir une carte "+user+" ▶  ")
    let reply2 = robot.IA(cards)
    console.log("Robot ▶  "+reply2);

    let points = compareCards(reply1, reply2, cards)

    totalPoints.push(points)
}




function compareCards(reply1, reply2, cards){
    let yourPoint = 0
    let IApoint = 0

    if (reply1 == 1 && reply2 == cards[0]) {
        console.log("Equality !");

    } else if (reply1 == 2 && reply2 == cards[1]) {
        console.log("Equality !");

    } else if (reply1 == 3 && reply2 == cards[2]) {
        console.log("Equality !");

    } else if (reply1 == 1 && reply2 == cards[1]) {
        console.log("Manche one failed for IA");
        yourPoint+= 1

    } else if (reply1 == 1 && reply2 == cards[2]) {
        console.log("Manche one failed for utilisator");
        IApoint+= 1

    } else if (reply1 == 2 && reply2 == cards[0]) {
        console.log("Manche one failed for utilisator");
        IApoint+= 1
    
    } else if (reply1 == 2 && reply2 == cards[2]) {
        console.log("Manche one failed for IA");
        yourPoint+= 1

    } else if (reply1 == 3 && reply2 == cards[0]) {
        console.log("Manche one failed for IA");
        yourPoint+= 1

    }else if (reply1 == 3 && reply2 == cards[1]) {
        console.log("Manche one failed for utilisator");
        IApoint+= 1
    }

    return [ yourPoint, IApoint ]
}

exports.choice = choice