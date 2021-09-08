document.addEventListener('DOMContentLoaded', function () {

    var displayBar = document.getElementById('DisplayBar'),
        inputZero = document.getElementById('Zero'),
        inputOne = document.getElementById('One'),
        inputTwo = document.getElementById('Two'),
        inputThree = document.getElementById('Three'),
        inputFour = document.getElementById('Four'),
        inputFive = document.getElementById('Five'),
        inputSix = document.getElementById('Six'),
        inputSeven = document.getElementById('Seven'),
        inputEight = document.getElementById('Eight'),
        inputNine = document.getElementById('Nine'),
        Dot = document.getElementById('DecimalPoint'),
        Addition = document.getElementById('Addition'),
        Multiplicaton = document.getElementById('Multiplication'),
        Subtraction = document.getElementById('Subtraction'),
        Result = document.getElementById('Result'),
        Division = document.getElementById('Division'),
        firstValue = "",
        operation = 0,
        secondValue = 0;

    inputZero.addEventListener('click', () => addDigit(inputZero.value));
    inputOne.addEventListener('click', () => addDigit(inputOne.value));
    inputTwo.addEventListener('click', () => addDigit(inputTwo.value));
  	inputThree.addEventListener('click', () => addDigit(inputThree.value));
	  inputFour.addEventListener('click', () => addDigit(inputFour.value));
	  inputFive.addEventListener('click', () => addDigit(inputFive.value));
	  inputSix.addEventListener('click', () => addDigit(inputSix.value));
	  inputSeven.addEventListener('click', () => addDigit(inputSeven.value));
	  inputEight.addEventListener('click', () => addDigit(inputEight.value));
	  inputNine.addEventListener('click', () => addDigit(inputNine.value));
    Dot.addEventListener('click', () => appendDot(Dot.value));
    Addition.addEventListener('click', () => operate(Addition.value));
    Multiplicaton.addEventListener('click', () => operate(Multiplicaton.value));
    Subtraction.addEventListener('click', () => operate(Subtraction.value));
    Division.addEventListener('click', () => operate(Division.value));
    Result.addEventListener('click' , () => calculate());
   
    window.addDigit = function (digit) {
      if (displayBar.value == '0') {
        displayBar.value = `${digit}`;
        firstValue = displayBar.value;
    } else {
      digit = `${digit}`;
		  firstValue = firstValue + digit;
    	displayBar.value = firstValue;
          }   
      }

    window.operate = function (op) {
        operation = op;
        secondValue = firstValue;
        firstValue = '';     
        displayBar.value = '0';    
    }
      
    window.calculate = function()  {
        let result = '';
        switch (operation) {
        case Addition.value : 
          result = parseFloat(secondValue) + parseFloat(firstValue);
                  break;      
        case Subtraction.value :
          result = parseFloat(secondValue) - parseFloat(firstValue);
                  break;
        case Multiplicaton.value :
          result = parseFloat(secondValue) * parseFloat(firstValue);
                  break;
        case Division.value :
          result = parseFloat(secondValue) / parseFloat(firstValue);
                  break;
        }
        displayBar.value = `${result}`;
        result = 0; 
        firstValue = displayBar.value;   
      }
      window.appendDot = function(Dot)
      {
        while (!displayBar.value.includes(Dot))
        {
          if (displayBar.value != "")
          {
            firstValue = firstValue + Dot;     
          }
          displayBar.value = firstValue;
            break;
            
      }
    }
    });
