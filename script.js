console.log("Try some math! Valid functions are add(a,b), subtract(a,b), multiply(a,b), and divide(a,b).")

// let a = 0;
let a = "";
// let b = 0;
let b = "";
let operator = "error";
let displayText = "";
let justSolved = true;
let oldSolution = 0;

const body = document.querySelector('body'); //Here we find the body from the html file and create in memory


const displayBar = document.createElement('displayBar');
displayBar.classList.add("displayBar");
body.appendChild(displayBar);
const display = document.createElement('display');
display.classList.add('display');
display.textContent = displayText;
// body.appendChild(display);
body.appendChild(displayBar);
displayBar.appendChild(display);

const numRow1 = document.createElement('numRow1');
numRow1.classList.add("numberRow");
body.appendChild(numRow1);
const numRow2 = document.createElement('numRow2');
numRow2.classList.add("numberRow");
body.appendChild(numRow2);
const numRow3 = document.createElement('numRow3');
numRow3.classList.add("numberRow");
body.appendChild(numRow3);
const opRow = document.createElement("opRow");
opRow.classList.add("operators");
body.appendChild(opRow);

const oneButton = document.createElement('button');
oneButton.textContent = "1";
oneButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "1";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved= false;
    displayText = displayText + "1";
    display.textContent = displayText;
});
numRow1.appendChild(oneButton);;
const twoButton = document.createElement('button');
twoButton.textContent = "2";
twoButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "2";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "2";
    display.textContent = displayText;
});
numRow1.appendChild(twoButton);;
const threeButton = document.createElement('button');
threeButton.textContent = "3";
threeButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "3";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "3";
    display.textContent = displayText;
});
numRow1.appendChild(threeButton);;

const fourButton = document.createElement('button');
fourButton.textContent = "4";
fourButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "4";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "4";
    display.textContent = displayText;
});
numRow2.appendChild(fourButton);;
const fiveButton = document.createElement('button');
fiveButton.textContent = "5";
fiveButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "5";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "5";
    display.textContent = displayText;
});
numRow2.appendChild(fiveButton);;
const sixButton = document.createElement('button');
sixButton.textContent = "6";
sixButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "6";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "6";
    display.textContent = displayText;
});
numRow2.appendChild(sixButton);

const sevenButton = document.createElement('button');
sevenButton.textContent = "7";
sevenButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "7";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "7";
    display.textContent = displayText;
});
numRow3.appendChild(sevenButton);;
const eightButton = document.createElement('button');
eightButton.textContent = "8";
eightButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "8";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "8";
    display.textContent = displayText;
});
numRow3.appendChild(eightButton);;
const nineButton = document.createElement('button');
nineButton.textContent = "9";
nineButton.addEventListener('click',()=> {
    // if(justSolved == true){
    //     a = "9";
    //     displayText = "";
    //     justSolved = false;
    // }
    justSolved = false;
    displayText = displayText + "9";
    display.textContent = displayText;
});
numRow3.appendChild(nineButton);
const zeroButton = document.createElement('button');
zeroButton.textContent = "0";
zeroButton.addEventListener('click',()=> {
    displayText = displayText + "0";
    display.textContent = displayText;
    justSolved = false;
});
numRow3.appendChild(zeroButton);

const plusButton = document.createElement('button');
plusButton.classList.add('add');
const minusButton = document.createElement('button');
minusButton.classList.add('subtract');
const multButton = document.createElement('button');
multButton.classList.add('multiply');
const divButton = document.createElement('button');
divButton.classList.add('divide');
plusButton.textContent = "+";
minusButton.textContent = "-";
multButton.textContent = "x";
divButton.textContent = "/";
plusButton.addEventListener('click',()=> {
    // operator = "+";
    if(justSolved == true){
        a = oldSolution;
        b = "";
        justSolved = false;
        display.textContent = "";
    }
    else{
        if(a == "" && displayText==""){
            a = displayText;
            display.textContent = "";
        }
        else{
            if(a == ""){
                a = displayText;
                display.textContent = "";
            }
            else{
                b = displayText;
            a = round(operate(operator,a,b));
            b  = "";
            display.textContent = a;
            }
        }
        // a = displayText;
    }
    operator = "+";
    // a = displayText;
    displayText = ""
    // display.textContent = displayText;
});
minusButton.addEventListener('click',()=> {
    if(justSolved == true){
        a = oldSolution;
        b = "";
        justSolved = false;
        display.textContent = "";
    }
    else{
        if(a == "" && displayText==""){
            a = displayText;
            display.textContent = "";
        }
        else{
            if(a == ""){
                a = displayText;
                display.textContent = "";
            }
            else{
                b = displayText;
            a = round(operate(operator,a,b));
            b  = "";
            display.textContent = a;
            }
        }
        // a = displayText;
    }
    operator = "-";
    // a = displayText;
    displayText = ""
    // display.textContent = displayText;
});
multButton.addEventListener('click',()=> {
    if(justSolved == true){
        a = oldSolution;
        b = "";
        justSolved = false;
        display.textContent = "";
    }
    else{
        if(a == "" && displayText==""){
            a = displayText;
            display.textContent = "";
        }
        else{
            if(a == ""){
                a = displayText;
                display.textContent = "";
            }
            else{
                b = displayText;
            a = round(operate(operator,a,b));
            b  = "";
            display.textContent = a;
            }
        }
        // a = displayText;
    }
    operator = "*";
    // a = displayText;
    displayText = ""
    // display.textContent = displayText;
});
divButton.addEventListener('click',()=> {
    if(justSolved == true){
        a = oldSolution;
        b = "";
        justSolved = false;
        display.textContent = "";
    }
    else{
        if(a == "" && displayText==""){
            a = displayText;
            display.textContent = "";
        }
        else{
            if(a == ""){
                a = displayText;
                display.textContent = "";
            }
            else{
                b = displayText;
            a = round(operate(operator,a,b));
            b  = "";
            display.textContent = a;
            }
        }
        // a = displayText;
    }
    operator = "/";
    // a = displayText;
    displayText = "";
    // display.textContent = displayText;
});
opRow.appendChild(plusButton);
opRow.appendChild(minusButton);
opRow.appendChild(multButton);
opRow.appendChild(divButton);

const rightRow = document.createElement('rightRow');
body.appendChild(rightRow);
rightRow.classList.add('rightRow');


const equalButton = document.createElement('button');
equalButton.textContent = "=";
equalButton.addEventListener('click',()=> {
    b = displayText;
    // let solution = operate(operator,a,b);
    let solution = round(operate(operator,a,b));
    console.log(solution);
    displayText = solution;
    display.textContent = displayText;
    // a = solution;
    a = "";
    // b = 0;
    b = "";
    operator = "error";
    // displayText = "";
    // oldSolution = 0;
    oldSolution =displayText;
    solution = 0;
    justSolved = true;
 });
rightRow.appendChild(equalButton);;

const clearButton = document.createElement('button');
clearButton.textContent = "CLR";
rightRow.appendChild(clearButton);
clearButton.addEventListener('click',()=> {
    a = "";
    b = "";
    displayText = ""
    display.textContent = displayText;
justSolved = true;
});

const negativeButton = document.createElement('button');
negativeButton.textContent = "(-)";
rightRow.appendChild(negativeButton);
negativeButton.addEventListener('click',()=> {
    if(displayText[0] != "-"){
        displayText = "-"+displayText;
    }
    else{
        displayText = displayText.slice(1,);
    }
    display.textContent = displayText;
});






//FUNCTIONS FOR OPERATIONS

function operate(operator, a, b){
    console.log("a is "+a);
    console.log("b is "+b);
    if(operator=="+"){
        console.log("solution is "+add(a,b));
        return add(a,b);
    }
    else if(operator == "-"){
        console.log("solution is "+subtract(a,b));
        return subtract(a,b);
    }
    else if(operator == "*"){
        console.log("solution is "+multiply(a,b));
        return multiply(a,b);
    }
    else if (operator == "/"){
        console.log("solution is "+divide(a,b));
        return divide(a,b);
    }
    else{
        return "please use a valid operator. Valid operators are +, -, *, and /."
    }

}

function add(a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        return "Error - divided by zero"
    }
    else{
        return a/b;
    }
}

function round(answer){
    let rounded = answer;
    newAnswer = answer.toString();
   let decimalPlace = newAnswer.indexOf(".");
//    console.log(decimalPlace);
   let answerLength = newAnswer.length;
//    console.log(answerLength);
   if(answerLength-decimalPlace >=9){
       cutoff = decimalPlace+8;
       rounded = newAnswer.slice(0,cutoff);
       console.log(rounded);
    //    rounded = rounded.parseFloat();
    //    console.log("more than 8");
   }
   else{
       rounded = answer;
    //    console.log("less than 8");
   }
   return rounded;
}