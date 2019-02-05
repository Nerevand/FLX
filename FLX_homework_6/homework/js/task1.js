let value1 = prompt(`input a from quadratic equation ax2 + bx + c`, 0).trim(),
    value2 = prompt(`input b from quadratic equation ${value1}x2 + bx + c`, 0).trim(),
    value3 = prompt(`input c from quadratic equation ${value1}x2 + ${value2}x + c`, 0).trim();
if (value1 === null || value2 === null || value3 === null) {
    alert(`Invalid data`);
} else if(isNaN(value1/2) || isNaN(value2/2) || isNaN(value3/2)){
    alert(`Invalid data`);
} else if(value1 === 0 || value1 === '0' || value1.length === 0 || value2.length === 0 || value3.length === 0) {
    alert('Invalid data. a = 0 - it is not quadratic equation');
} else {
    result(value1, value2, value3);
}
function result(a,b,c) {
    let d = b*b - 4*a*c;
    if(d < 0){
        return alert(`no solution`);        
    } else if(d === 0){
        let x = -b/(2*a);
        return alert(`x = ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        return alert(`x1 = ${x1}, x2 = ${x2}`);
    }
}