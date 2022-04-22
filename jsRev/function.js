// 1. named functions 
function add(n1,n2){
    return n1+n2
}

let result = add(10,20)
console.log("result:",result);

console.log('===================================');
// 2 . anonymous func

let subtract = function(n1,n2){
    return n1-n2;
}
let difference = subtract(30,20)
console.log("difference:",difference)
console.log('===================================');


//3 IIFE(imediately invoked function expression) OR self invoked function

(function (n1,n2){
    let product = n1*n2;
    console.log(`product : ${product}`)
})(10,20)

console.log('===================================');

// arrow function 
let divide = (n1,n2)=>n1/n2 ; 
let d = divide(10,20)

console.log(`value :${d}`);

let greet = name =>{
    return ("welcome " + name)
}
console.log(greet('HERO'));

console.log('===================================');

// callback function 

function test (anything, sample1){
    console.log('test function ');
    anything()
    sample1()
}

function sample(){
    console.log('sample function');
}

function sample1(){
    console.log('another sample function');
}

test(sample,sample1)