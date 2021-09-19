let mtpTable = function (num){
    for(let i = 1; i<=10; i++){
        let sum = num * i;
        console.log(num + "*" + i + " = " + sum);
    }
}
mtpTable(4);

let evenOrOdd = function (num){
    if(num%2==0){
        console.log(num +" - The number is even");
    }else{
        console.log(num + " - The number is odd");
    }
}
evenOrOdd(16);