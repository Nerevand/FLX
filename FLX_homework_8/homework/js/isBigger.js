function isBigger(value1, value2) {
    if (!Number(value1) || !Number(value2)) {
        return 'Incorrect data!';
    }
    return value1 > value2;
}
isBigger(5, -1);