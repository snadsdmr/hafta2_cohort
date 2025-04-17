// circle.js

function circleArea(r) {
    return Math.PI * r * r;
}

function circleCircumference(r) {
    return 2 * Math.PI * r;
}

// Fonksiyonları dışarıya export edelim
module.exports = {
    circleArea,
    circleCircumference
};
