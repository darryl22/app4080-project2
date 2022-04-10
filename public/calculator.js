let number = document.querySelectorAll('[number]');
let operator = document.querySelectorAll('[operator]');
let clear = document.querySelector('.clear');
let secondnum = document.querySelector('.second-number');
let firstnum = document.querySelector('.first-number');
let equals = document.querySelector('.equals');
let currentoperator;

function calculate(f, s, o){
    let result;
    switch(o){
        case '+':
            result = f + s;
            break;    
            
        case '-':
            result = f - s;
            break;

        case '*': 
            result = f * s;
            break;
        case '/':
            result = f / s;
    }

    firstnum.innerHTML = result;
    secondnum.innerHTML = '';
}

number.forEach(num => {
    num.addEventListener("click", () => {
        secondnum.innerHTML = secondnum.innerHTML.toString() + num.innerHTML.toString();
    })
})

operator.forEach(opr => {
    opr.addEventListener("click", () => {
        currentoperator = opr.innerHTML;
        if (secondnum.innerHTML === "") return

        if (firstnum.innerHTML === ""){
            firstnum.innerHTML = secondnum.innerHTML;
            secondnum.innerHTML = "";
        }else{
            calculate(parseFloat(firstnum.innerHTML), parseFloat(secondnum.innerHTML), currentoperator);
        }
    })
})

clear.addEventListener("click", () => {
    secondnum.innerHTML = "";
    firstnum.innerHTML = "";
})

equals.addEventListener("click", e => {
    calculate(parseFloat(firstnum.innerHTML), parseFloat(secondnum.innerHTML), currentoperator);
})

module.exports = {calculate};
