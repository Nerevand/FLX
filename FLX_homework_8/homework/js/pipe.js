function addOne(x) {
    return x + 1;
}
function pipe(...args) {
    var num = args[0];
    for (var i = 1; i < args.length; i++) {
        num = args[i](num)
    }
    return num
}
pipe(1, addOne, addOne); 