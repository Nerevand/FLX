let price = prompt('price', '0').trim();
let discount = prompt('discount', '0').trim(); 
if(isNaN(price/2) || isNaN(discount/2) || price === null || discount === null){
    alert(`Invalid input data`);
} else if(price < 0 || price > 9999999){
    alert(`Invalid input data`);
} else if(discount < 0 || discount > 99 || price.length === 0 || discount.length === 0){
    alert(`Invalid input data`);
} else {
    result();
}
function result(){ 
    let spend = price * (100 - discount)/100;
    return alert(`    Price without discount: ${price}
    Discount: ${discount}%
    Price with discount: ${spend.toFixed(2)*1}
    Saved: ${(price - spend).toFixed(2)*1}`);
}