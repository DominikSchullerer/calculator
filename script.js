const display = document.querySelector('#display')
const numberBtns = document.querySelectorAll('.numberBtn')
const decimalBtn = document.querySelector('#decimalBtn')
const operationBtns = document.querySelectorAll('.operationBtn')
const equalsBtn = document.querySelector('#equalsBtn')
const clearBtn = document.querySelector('#c')
const clearAllBtn = document.querySelector('#ac')

let displayContentLeading = '0';
let displayContentTrailing = '';
let displayContentNumber = 0;
let storedNumber = null;
let storedOperator = null;


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

        case 'x':
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
    display.textContent = number
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

operationBtns.forEach(operationBtn => {
    operationBtn.addEventListener('click', () => {
        if(storedNumber == null) {
            storedOperator = operationBtn.textContent;
            storedNumber = displayContentNumber;
            displayContentNumber = 0;
            displayContentLeading = '0'
            displayContentTrailing = ''
            updateDisplay(displayContentNumber);
        } else {
            if(storedOperator != null) {
                result = operate(storedNumber, displayContentNumber, storedOperator);
                updateDisplay(result);
                storedNumber = result;
                displayContentNumber = 0
                displayContentLeading = '0'
                displayContentTrailing = ''
            }
            storedOperator = operationBtn.textContent;
        }


        
    })
})

equalsBtn.addEventListener('click', () => {
    if(storedOperator) {
        result = operate(storedNumber, displayContentNumber, storedOperator);
        updateDisplay(result);
        storedNumber = result;
        displayContentNumber = 0
        displayContentLeading = '0'
        displayContentTrailing = ''
        storedOperator = null;
    }
})

clearBtn.addEventListener('click', () => {
    displayContentLeading = '0'
    displayContentTrailing = ''
    displayContentNumber = 0
    updateDisplay(displayContentNumber)
})

clearAllBtn.addEventListener('click', () => {
    displayContentLeading = '0';
    displayContentTrailing = '';
    displayContentNumber = 0;
    storedNumber = null;
    storedOperator = null;
    updateDisplay(displayContentNumber)
})