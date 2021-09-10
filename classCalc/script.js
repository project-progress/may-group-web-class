class Calc {
    constructor(number1,operatin,number2){
        if(operatin == "+"){
            console.log(number1 + number2);
        }else if(operatin == "-"){
            console.log(number1 - number2);
        }else if(operatin == "*"){
            console.log(number1 * number2);
        }else if(operatin == "/"){
            console.log(number1 / number2);
        }
    }
}
// enter 3 value number, operation(""), number

let sum = new Calc(48,"/",8);