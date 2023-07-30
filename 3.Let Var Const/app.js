//* Var - Let - Const


/*
        -----------Scope (kapsam)----------

        -> Global scope : heryerden erişebilirsin.
        -> Function scope
        -> Block scope
*/
var degiskenIsmi = 10;

console.log(degiskenIsmi);

function method(){

    var a = 5;
    console.log(degiskenIsmi);
    console.log(a);
}

console.log(degiskenIsmi);
method();
//console.log(a);



