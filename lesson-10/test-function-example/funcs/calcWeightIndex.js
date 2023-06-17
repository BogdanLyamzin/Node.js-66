const calcWeightIndex = (height, weight) => {
    if(height === undefined || weight === undefined) {
        throw 'height and weight required';
    }
    if(typeof height !== "number" || typeof weight !== "number") {
        throw new Error('height and weight must be number')
    }
    if(height > weight && weight < 3) {
        throw new Error('height must be first argument and weight - second')
    }
    if(height > 3) {
        throw new Error('height must be in metr')
    }

    const result = weight / (height ** 2);
    return Number(result.toFixed(2));
}

module.exports = calcWeightIndex;