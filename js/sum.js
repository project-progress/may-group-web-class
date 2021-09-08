function functio(num)
{   
    if(num === 0) {
        return 0;
    }
    
    let residual = num % 10;
    return residual + functio(Math.trunc(num/10));
}

let n = prompt("Enter a number");
console.log(functio(n));