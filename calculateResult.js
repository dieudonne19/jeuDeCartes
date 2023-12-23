
/**
 * 
 * @param {array[]} array 
 */

function calculResult(array) {
    return array.reduce(([a, b], [c, d]) => {
        return [(a + c), (b + d)]
    })
}

exports.calculResult = calculResult
