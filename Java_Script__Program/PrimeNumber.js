/*
4. Prime Numbers
Description: Write a program to print all prime numbers up to a given number n.
Input: n = 10

Output: 2 3 5 7
*/

let a = 10;
for (let i = 2; i <= a; i++) {
    let count = 0;
    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count++; 
            break;
        }
    }
    
    if (count == 0) {
        console.log(i);
    }
}
