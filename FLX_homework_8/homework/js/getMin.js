function getMin() {
    var arr = Array.from(arguments);
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return 'Incorrect data!';
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
getMin(3, 0, -3);