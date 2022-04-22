let fruits = ['apple','mango','orange','kiwi','lichi'] ;

// console.log(fruits[1]);

// for(var i=0; i<fruits.length ; i++){
//     console.log(`fruits at index ${i} ${fruits[i]}`);
// }

for (var i= fruits.length-1;i>=0; i--){
    console.log(`fruits at index ${i} ${fruits[i]}`);
}

console.log('==========================================');

let data = ['apple','mango',undefined,150,false,,,] ;

for(var i=0 ; i<data.length;i++){
    console.log(data[i]);
}

console.log('==========================================');

let books = [
    {
        title:'javascript',
        price:180
    },
    {
        title:'python',
        price:1230
    },
    {
        title:'java',
        price:1800
    }
]

for(var i=0 ; i<books.length; i++){
    if(books[i].price >500){
        console.log(books[i]);
    }
    else{
        console.log('no books available at this price');
    }
}
console.log('==============================');

for(var i=0 ; i<books.length; i++){
    if(books[i].title.length>4){
        console.log(books[i]);
    }
    else{
        console.log('no books available');
    }
}

console.log('===============================');

let fruits1 = ['apple','mango','orange','kiwi','lichi',,,,] ;

for(var item of fruits1 ){
    console.log(`fruit :${item}`);
}

console.log('===============================');
let fruits2={
    fruit1:'apple',
    fruit2:'mango',
    fruit3:'orange',
    fruit4:'kiwi',
}

for(var key in fruits1 ){
    console.log(`fruit :${fruits1[key]}`);
}