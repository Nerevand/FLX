function reverseNumber(x) {
    if (!Number.isInteger(x)) {
        return 'Incorrect data';
    }
    return Math.sign(x) * Math.abs(x).toString().split('').reverse().join('');
}
reverseNumber(123);