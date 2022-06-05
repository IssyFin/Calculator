console.log("Try some math! Valid functions are add(a,b), subtract(a,b), multiply(a,b), and divide(a,b).")

let a = 0;
let b = 0;
let operator = "error";

let displayText = "";

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
    displayText = displayText + "1";
    display.textContent = displayText;
});
numRow1.appendChild(oneButton);;
const twoButton = document.createElement('button');
twoButton.textContent = "2";
twoButton.addEventListener('click',()=> {
    displayText = displayText + "2";
    display.textContent = displayText;
});
numRow1.appendChild(twoButton);;
const threeButton = document.createElement('button');
threeButton.textContent = "3";
threeButton.addEventListener('click',()=> {
    displayText = displayText + "3";
    display.textContent = displayText;
});
numRow1.appendChild(threeButton);;

const fourButton = document.createElement('button');
fourButton.textContent = "4";
fourButton.addEventListener('click',()=> {
    displayText = displayText + "4";
    display.textContent = displayText;
});
numRow2.appendChild(fourButton);;
const fiveButton = document.createElement('button');
fiveButton.textContent = "5";
fiveButton.addEventListener('click',()=> {
    displayText = displayText + "5";
    display.textContent = displayText;
});
numRow2.appendChild(fiveButton);;
const sixButton = document.createElement('button');
sixButton.textContent = "6";
sixButton.addEventListener('click',()=> {
    displayText = displayText + "6";
    display.textContent = displayText;
});
numRow2.appendChild(sixButton);

const sevenButton = document.createElement('button');
sevenButton.textContent = "7";
sevenButton.addEventListener('click',()=> {
    displayText = displayText + "7";
    display.textContent = displayText;
});
numRow3.appendChild(sevenButton);;
const eightButton = document.createElement('button');
eightButton.textContent = "8";
eightButton.addEventListener('click',()=> {
    displayText = displayText + "8";
    display.textContent = displayText;
});
numRow3.appendChild(eightButton);;
const nineButton = document.createElement('button');
nineButton.textContent = "9";
nineButton.addEventListener('click',()=> {
    displayText = displayText + "9";
    display.textContent = displayText;
});
numRow3.appendChild(nineButton);
const zeroButton = document.createElement('button');
zeroButton.textContent = "0";
zeroButton.addEventListener('click',()=> {
    displayText = displayText + "0";
    display.textContent = displayText;
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
    operator = "+";
    a = displayText;
    displayText = ""
    display.textContent = displayText;
});
minusButton.addEventListener('click',()=> {
    operator = "-";
    a = displayText;
    displayText = ""
    display.textContent = displayText;
});
multButton.addEventListener('click',()=> {
    operator = "*";
    a = displayText;
    displayText = ""
    display.textContent = displayText;
});
divButton.addEventListener('click',()=> {
   operator = "/";
    a = displayText;
    displayText = ""
    display.textContent = displayText;
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
    let solution = operate(operator,a,b);
    displayText = solution;
    display.textContent = displayText;
    a = 0;
    b = 0;
    operator = "error";
    displayText = "";
    solution = 0;
 });
rightRow.appendChild(equalButton);;

const clearButton = document.createElement('button');
clearButton.textContent = "CLR";
rightRow.appendChild(clearButton);
clearButton.addEventListener('click',()=> {
    displayText = ""
    display.textContent = displayText;
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
        return "error"
    }
    else{
        return a/b;
    }
}