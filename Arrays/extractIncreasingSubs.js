/*
Write a function that extracts only those numbers that form a non-decreasing subsequence. In other
words, you start from the first element and continue to the end of the given array of numbers. Any

© Software University Foundation. This work is licensed under the CC-BY-NC-SA license.
Follow us: Page 3 of 8
number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the
current biggest one you set it as the current biggest one and you continue to the next number.
The input comes as an array of numbers.
The output is the processed array after the filtration, which should be a non-decreasing subsequence.
Each element should be printed on a new line.
*/


function solve(arr) {
    let biggest = 0;
    let result = [];

    for (let current of arr) {
        if (current >= biggest) {
            result.push(current);
            biggest = current;
        }
    }
    for (let el of result) {
        console.log(el);
    }
}

solve([20,
    3,
    2,
    15,
    6,
    1]);