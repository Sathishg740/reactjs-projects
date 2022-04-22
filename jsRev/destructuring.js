let person = {
    name:'Doe',
    age:23,
    eyeColor:'blue',
    adress:{
        city:'Mysore',
        pincode:878979
    },
    hobbies:['reading','swimming','cycling']
}

// console.log(person.name);
// console.log(person.adress.pincode);


let {name, eyeColor,adress:{pincode} ,hobbies:[hoby1, hoby2, hoby3]  } = person

console.log(name , pincode,eyeColor)
console.log(`hoby1 : ${hoby1}`);
console.log(`hoby2 : ${hoby2}`);

