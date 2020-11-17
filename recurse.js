// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(max){
    if(max<1){
        return 0;
    }
    else{
        max = Math.floor(max);
        return max + rSigma(max-1);
    }

}

// console.log(rSigma(5));
// console.log(rSigma(2.5));
// console.log(rSigma(-1));



// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, 
// truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFactorial(max){
    if(max<1){
        return 1;
    }
    else{
        max = Math.floor(max);
        return max * rFactorial(max-1);
    }

}

// console.log(rFactorial(3));
// console.log(rFactorial(6.5));

// console.log(rFactorial(.45));



// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

// rBinarySearch([1,3,5,6],4) = false; 

// rBinarySearch([4,5,6,8,12],5) = true.



// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both).
//  Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).