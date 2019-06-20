function sumNumbers(){
var number_one =
document.getElementById("numberOne").value

var number_two =
document.getElementById("numberTwo").value

var answer = 
(parseInt(number_one))+
parseInt(number_two)

var showAnswer
=document.getElementById("sum").innerHTML = answer
}

function subNumbers(){
var number_one =
document.getElementById("numberOne").value

var number_two =
document.getElementById("numberTwo").value

var answer = 
(parseInt(number_one))-
parseInt(number_two)

var showAnswer =
    
    document.getElementById("sub").innerHTML = answer
}

function multiNumbers(){
var number_one =
document.getElementById("numberOne").value

var number_two =
document.getElementById("numberTwo").value

var answer = 
(parseInt(number_one))*
parseInt(number_two)

var showAnswer =
    
    document.getElementById("multi").innerHTML = answer
}
