const ask = require('./ask')
const  compareCards  = require('./compareCards')
const adversaire = require('./IA')


// fonction une manche
function round(you, cards, totalPoints) {
    // la functon ask()
     let yourCard = ask.ask(you)

    // L'IA reponds aléatoirement parmi les cartes
    // function IA
    let IAresponse = adversaire.IA(cards)
    console.log(`Robot  ▶ ${IAresponse}`);

    let points = compareCards.compareCards(yourCard, IAresponse)
    totalPoints.push(points)

}

exports.round = round