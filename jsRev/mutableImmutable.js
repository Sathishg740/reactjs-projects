//  immutable 
 
 var name1 = 'ajay'
 var nameCopy = name1 ;

//  console.log(`name1 : ${name1}`);
//  console.log(`nameCopy : ${nameCopy}`);

 var name1 = "girish"
//  var nameCopy = name1
 console.log(`name1 : ${name1}`);
 console.log(`nameCopy : ${nameCopy}`);


// mutable

let person = {
    name : 'vijay',
    age : 40
}

let personCopy = person

console.log(person.name);
// console.log(personCopy.name);

person.name = 'abhi'
console.log(`name ${person.name}`);
console.log(`nameCopy ${personCopy.name}`);



console.log('==================================');

let person1 = {
    name : 'vijay',
    age : 40
}

let person2 = Object.assign({}, person1)

person1.name = 'friends'
console.log(`person1 name ${person1.name}`);

console.log(`person2 name  ${person2.name}`);
