/*
Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the
last element should become the first, upon rotation.
The input comes as an array of strings. The last element of the array is the amount of rotation you need to
perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated
by a single space.
*/


function solve(arr) {

    let step = Number(arr.pop())%arr.length;
    for (let i = 0; i<step; i++){
        let el = arr.pop();
        arr.unshift(el);
    }
    console.log(arr.join(' '));

}

solve(['1',
    '2',
    '3',
    '4',
    '2'
]);