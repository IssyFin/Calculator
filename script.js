console.log("Try some math! Valid functions are add(a,b), subtract(a,b), multiply(a,b), and divide(a,b).")

let a = 0;
let b = 0;
let operator = "x";

function operate(operator, a, b){
    if(operator=="+"){
        return add(a,b);
    }
    else if(operator == "-"){
        return subtract(a,b);
    }
    else if(operator == "*"){
        return multiply(a,b);
    }
    else if (operator == "/"){
        return divide(a,b);
    }
    else{
        return "please use a valid operator. Valid operators are +, -, *, and /."
    }

}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return "error"
    }
    else{
        return a/b;
    }
}