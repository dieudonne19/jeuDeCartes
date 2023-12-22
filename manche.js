const ask = require('./ask')
const  compareCards  = require('./compareCards')
const adversaire = require('./IA')


// fonction une manche
// le parametre "cards" io le tableau misy anle carte 3
// le param "you" le pseudo anle joueur
function round(you, cards, totalPoints) {
    // la functon ask()
     let yourCard = ask.ask(you) // ity soloina amle any aminao fotsiny aveo

    // L'IA reponds aléatoirement parmi les cartes
    // function IA na hafa
    let IAresponse = adversaire.IA(cards) // ity soloina amle any aminao fotsiny aveo
    console.log(`Robot  ▶ ${IAresponse}`);

    // "let points" ilay resultat ana manche iray
    // de aveo stockena anaty tableau " totalPoints " izay natao parametre satria tina recuperena le zavatra
    // ao anatiny amin'ny farany
    let points = compareCards.compareCards(yourCard, IAresponse)
    totalPoints.push(points)

}

exports.round = round
