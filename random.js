
/**
 * 
 * @param {array} array 
 */
function random (array) { 
    // IA 
    let min = 0
    let max = array.length-1

    let random = Math.floor(Math.random()* (max - min + 1) + min)

    return array[random]
}

// console.log(random(messages.SuccessMessage));

exports.random = random