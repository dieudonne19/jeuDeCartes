
/**
 * 
 * @param {string} you 
 * @param {any} ia 
 */

function compareCards (you, ia) {
    let yourPoint = 0
    let IApoint = 0
    if (you == 'eau' && ia == '-💦- Eau') {
        // console.log(` ${you}  ==  ${ia}  `);
    }
    if (you == 'eau' && ia == '-🔥- Feu') {
        yourPoint += 1
    }
    if (you == 'eau' && ia == '-🍀- Plante') {
        IApoint += 1
    }
    if (you == 'feu' && ia == '-💦- Eau') {
        IApoint += 1
    }
    if (you == 'feu' && ia == '-🍀- Plante') {
        yourPoint += 1
    }
    if (you == 'plante' && ia == '-💦- Eau') {
        yourPoint += 1
    }
    if (you == 'plante' && ia == '-🔥- Feu') {
        IApoint += 1
    }
    if (you == 'feu' && ia == '-🔥- Feu') {
        // console.log(` ${you}  ==  ${ia}`);
    }
    if (you == 'plante' && ia == '-🍀- Plante') {
        // console.log(` ${you}  ==  ${ia} `);
    }
    return [yourPoint, IApoint]// retourne tableau iray a chaque manche; efa io ny position anle point
}

exports.compareCards = compareCards
