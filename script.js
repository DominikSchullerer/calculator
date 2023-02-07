const display = document.querySelector('#display')
const numberBtns = document.querySelectorAll('.numberBtn')
const decimalBtn = document.querySelector('#decimalBtn')

console.log(decimalBtn)

let displayContentLeading = '0';
let displayContentTrailing = '';
let displayContentNumber = 0;



function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiyply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    let result
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;

        case '-':
            result = subtract(num1, num2);
            break;

        case '*':
            result = multiyply(num1, num2);
            break;
            
        case '/':
            result = divide(num1, num2);
            break;    
    
        default:
            break;
    }

    return result;
}

function updateDisplay(number) {
    display.textContent = displayContentNumber
}


numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        if(displayContentTrailing === '') {
            displayContentLeading = displayContentLeading + numberBtn.textContent
        } else {
            displayContentTrailing = displayContentTrailing + numberBtn.textContent
        }

        displayContentNumber = Number(displayContentLeading + displayContentTrailing)
        updateDisplay(displayContentNumber)
    })
})

decimalBtn.addEventListener('click', () => {
    if(displayContentTrailing === '') {
        displayContentTrailing = '.'
    }
})