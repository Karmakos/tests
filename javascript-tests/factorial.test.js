// Create a function that calculates the factorial of a number
// USING AN ARRAY: Method 1
function factorialWithArray(n){
let  factorialNumbers = [];
if (n === 0) return 1;
for(let i = 1; i <= n; i++)
{
    factorialNumbers.push(i);
}

const multiple = factorialNumbers.reduce((a, b) =>
a * b, 1)
return multiple
}


// SAME AS 1 BUT WITHOUT A STORAGE ARRAY: Method 2
function factorialNoArray(n){
    if(n == 0) return 1;
    let multiple = 1;
    for(let i = 1; i <= n; i++){
        multiple *= i;
    }
    return multiple;
}

// Calculating Factorial Recursively: Method 3.

function factorialRecursively(n){
    if(n == 0)
        return 1;
    return n * factorialRecursively(n - 1);

}