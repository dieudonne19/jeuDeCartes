// const tab = [
//     [0,1],
//     [1,0], 
//     [1,2],
//     [1,2]
// ]
/**
 * 
 * @param {array[]} array 
 */

// atao plus daholo ny index[0] anle tableau kely rehetra
// atao plus daholo ny index[1] anle tableau kely rehetra

// de aveo atambatra ao anaty tableau ray hafa le valiny: "result" ao @play.js ilay tableau / [total index[0], total index[1]]
function calculResult(array) {
    return array.reduce(([a, b], [c, d]) => {
        return [(a + c), (b + d)]
    })
}

exports.calculResult = calculResult
// console.log(calculResult(tab));