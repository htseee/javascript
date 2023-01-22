function circleArea(radiusLength) {
    return Math.PI * radiusLength * radiusLength;
}
function squareArea(sideLength) {
    return sideLength * sideLength;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;