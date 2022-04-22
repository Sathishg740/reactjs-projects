 // array helper methods 

// why it is used for ?
// what is the return type ?
// arguments it takes

 let numbers = [10,20,30,40];
  
 let eachNumber = numbers.forEach((value, index)=>{
    console.log(`value of ${index} is ${value}`);
 }) 

 console.log('=========================');

 // isArray 
console.log(Array.isArray(numbers));

console.log('=========================');

// pop()
// let removeElem = numbers.pop() 
// console.log(`removed element : ${removeElem}`);
// console.log(`numbers after pop : ${numbers}`);

// splice 
// let spliceElem = numbers.splice(1,2)
// console.log(spliceElem);
// console.log("numbers after splice", numbers);

// slice 
let sliceElem = numbers.slice(0 ,2 )
console.log(sliceElem);
console.log(numbers );

// join ()

let e = [10,20,30,40,50]
// let joinElem = e.join('-')
// console.log(joinElem);

// includes 

// let hasFourty = e.includes(400)
// console.log(hasFourty);

// indexOf 

// let idxOf = e.indexOf(300)
// console.log(idxOf);

// filter 

let num1 = [100,200,300,500,600]
let filteredNum = num1.filter((val,idx)=>{
    return val >150
})
console.log(filteredNum);