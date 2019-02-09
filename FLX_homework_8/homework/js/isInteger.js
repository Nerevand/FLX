function isInteger(value) {
    value = parseFloat(value);
    if (Math.floor(value) === value) {
        return true;
    } else {
        return false;
    }
}
isInteger(5);