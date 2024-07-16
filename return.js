// function add(number1, number2){
//     var sum = number1 + number2;
//     console.log(sum);
//     // return sum;
// }
// // add(5, 2);

// var total = add(5, 7);
// console.log('total', total);
//******************************************* */
// The reason you don't get any return value from your code is that your function add does not actually return a value. It only logs the sum to the console. To return the sum from the function, you need to use the return statement
/************************************************ */

// function add(number1, number2){
//     var sum = number1 + number2;
//     console.log(sum);
//     return sum;
// }
// // add(5, 2);

// var total = add(5, 7);
// console.log('total', total);


function bringShingara (money){
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;
}
bringShingara(120);
