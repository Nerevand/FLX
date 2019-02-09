function isBigger(value1, value2) {
    if (!Number(value1) || !Number(value2)) {
        return 'Incorrect data!';
    }
    return value1 > value2;
}
function isSmaller(value1, value2) {
    return !isBigger(value1, value2);
}
isSmaller(5, -1);