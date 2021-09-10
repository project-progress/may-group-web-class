let x = +prompt("Enter first number");
let operators = prompt("Enter operator(+, *, - or /)");
let y = +prompt("Enter second number");

class Action {
    addition(x, y) {
        return x + y;
    }

    subtraction(x, y) {
        return x - y;
    } 

    multiplication(x, y) {
        return x * y;
    }

    division(x, y) {
        return x / y;
    }
}

const calculator = new Action()
switch (operators) {
    case "+":
         console.log(calculator.addition(x, y));
         break;
    case "-":
        console.log(calculator.subtraction(x, y));
         break;
    case "*":
        console.log(calculator.multiplication(x,y));
         break;
    case "/":
        console.log(calculator.division(x, y));
         break;
}