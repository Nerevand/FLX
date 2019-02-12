function reverseNumber(x) {
    if (!Number.isInteger(x)) {
        return 'Incorrect data';
    }
    //if we can't use reverse() below i add other answer on this type of task
    // return Math.sign(x) * Math.abs(x).toString().split('').reverse().join('');
    x = String(x).split('');
    let negative = false;
    let res = [];
    let length = x.length;
    if (x[0] === '-') {
        negative = true;
        x.shift();
    }
    for (let i = 0; i < length; i++) {
        res.unshift(x.shift());
    }
    if (negative) {
        res = res.join('') * (-1);
    } else {
        res = Number(res.join(''));
    }
    return res;
}
reverseNumber(123);