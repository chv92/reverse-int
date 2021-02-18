module.exports = function reverse(n) {

    let newArr = Math.abs(n).toString().split('').reverse().join('');
    return newArr;
}
