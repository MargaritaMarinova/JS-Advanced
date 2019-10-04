/*

Write a function that orders a given array of strings, by length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
The input comes as an array of strings.
The output is the ordered array of strings.
*/

function solve(arr){
    arr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    
    .forEach (a => console.log(a));
}

solve(['alpha', 
'beta', 
'gamma']
);