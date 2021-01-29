exports.min = function min(array = []) {

    const valZero = array.length === 0

    if (valZero) {
        return 0
    } else {
        const valMin = Math.min(...array)

        return valMin
    }
}

exports.max = function max(array = []) {

    const valZero = array.length === 0

    if (valZero) {
        return 0
    } else {
        const valMax = Math.max(...array)

        return valMax
    }
}

exports.avg = function avg(array = []) {

    const valZero = array.length === 0

    if (valZero) {
        return 0
    } else {
        const arraySum = array.reduce((a, b) => a + b, 0)
        const valAvg = arraySum / array.length

        return valAvg
    }
}
