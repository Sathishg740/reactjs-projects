//1 

function first(){
    setTimeout(function(){
        console.log("first function");
    },0)
    console.log("test ur brain");
}

function second(){
    console.log("second function");
}

function third(){
    setTimeout(function(){
        console.log("test ur second brain");
    },0)
    console.log("third function");
}

first()
second()
third()