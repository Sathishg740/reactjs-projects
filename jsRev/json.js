let person1 = {
    name :'Ajay',
    age :13,
    color:'blue',
    adress:{
        city:'Bangalore'
    }
}

// let person2 = Object.assign({}, person1)

// //person1
// console.log(person1.name);
// console.log(person1.adress.city);

// // person2
// console.log(person2.name);
// console.log(person2.adress.city);

// console.log('==================================');

// person1.name = 'Sujay'
// person1.adress.city = "Chennai"

// // //person1
// console.log(person1.name);
// console.log(person1.adress.city);

// // // person2
// console.log(person2.name);
// console.log(person2.adress.city);

//deep copy 

let stringifyPerson1 = JSON.stringify(person1)
console.log('after conversion from js to json stringifyPerson1', stringifyPerson1);

let jspersonObject = JSON.parse(stringifyPerson1)
console.log(jspersonObject);

person1.adress.city="mumbai"
console.log('person1 city', person1.adress.city);

console.log('person2 city',jspersonObject.adress.city);

