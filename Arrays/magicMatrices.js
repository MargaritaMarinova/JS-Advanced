/*
Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.
*/


function solve(input) {
    let isTrue = true;
    let sum = input[0].reduce((a, b) => a + b);

    for (let i = 0; i < input.length; i++) {
        let sumRolls = input[i].reduce((a, b) => a + b);
        let sumCol = 0;

        for (let j = 0; j < input.length; j++) {
            sumCol += input[i][j];
        }

        if (sumRolls !== sumCol || sum !== sumRolls || sum !== sumCol) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        console.log('true');
    } else {
        console.log('false');
    }
}

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);