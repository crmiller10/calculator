// Get all the keys(buttons) from document
let keys = document.querySelectorAll('#calculator button');
let input = document.querySelector('.input');
let operator = '';
let operand1 = '';
let operand2 = '';
let op = '';

function processNumber(number) {}
// take the number and put it in the appropriate operand
// if the operator exists, this number should be appended
// to operand1. otherwise, it should be appended to operand 2

function processOperator(operatorText) {
  // sets the operator.
  // console.log(operatorText);
  if (operatorText === '+') {
    operator = function (a, b) { return a + b; }
  }else if (operatorText === '-') {
    operator = function (a, b) { return a - b; }
  }else if (operatorText === '*') {
    operator = function (a, b) { return a * b; }
  }else if (operatorText === '/') {
    operator = function (a, b) { return a / b; }
  }
}

function math(oper) {
  if(oper === '+') {
    input.textContent = parseFloat(operand1) + parseFloat(operand2);
  }else if (oper === '-') {
    input.textContent = parseFloat(operand1) - parseFloat(operand2);
  }else if (oper === '*') {
    input.textContent = parseFloat(operand1) * parseFloat(operand2);
  }else if (oper === '/') {
    input.textContent = parseFloat(operand1) / parseFloat(operand2);
  }
}

// Add click addEventListener to all the keys and perform operations
for(let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function() {
    // Get the input and button values

    let inputVal = input.innerHTML;
    let btnVal = keys[i].getAttribute('data-value');

    if (btnVal === 'C') {
      input.textContent = '';
      operand1 = '';
      operand2 = '';
      op = '';
    } else if (btnVal === '=') {
      // console.log(input.textContent);
      for (let i = 0; i < input.textContent.length; i++) {
        if (input.textContent[i] === '+' || input.textContent[i] === '-' || input.textContent[i] === '*' || input.textContent[i] === '/' ) {
          op = input.textContent[i];
        } else {
          if (op === '') {
            operand1 += input.textContent[i];
          } else {
             operand2 += input.textContent[i];
          }
        }
      }

      math(op);
      // console.log(operand1);
      // console.log(operand2);
      // console.log(op);
      // run the operator function, with operand1
      // and operand2 as the arguments.
      // set the result to operand1 and
      // update the screen text with the result.
      // operator(operand1, operand2);
    } else {
      if (!isNaN(btnVal) || btnVal === '.') {
        processNumber(btnVal);
      } else {
        processOperator(btnVal);
      }
      input.textContent = input.textContent + btnVal;
    }
  });
}