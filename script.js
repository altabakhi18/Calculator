//functions for basic math
function add(one, two){
    return one + two;
}

function subtract(one, two){
    return one - two;
}

function multiply(one, two){
    return one * two;
}

function divide(one, two){
    return one / two;
}

//operator function
function operate(one, two, operator){

    switch(operator){
        case '+':
            return add(one, two);
        
        case '-':
            return subtract(one, two);

        case '*':
            return multiply(one, two);

        case '/':
            return divide(one, two);
    }
}
const p = document.querySelector(".p");


function display(){
    let memory;

    
}

