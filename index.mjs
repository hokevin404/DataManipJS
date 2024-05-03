// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
const isMod5 = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5);
console.log(isMod5);

// Check if the first number is larger than the last. Cache the result in a variable.
const isLargerThanLast = (n1 > n2) && (n2 > n3) && (n3 > n4);
console.log(isLargerThanLast);

// Accomplish the following arithmetic chain:
//    Subtract the first number from the second number.
//    Multiply the result by the third number.
//    Find the remainder of dividing the result by the fourth number.
let numOne = n2 - n1;
let numTwo = numOne * n3;
let numThree = numTwo % n4;

// Change the way that isOver25 calculates so that we do not need to use the NOT 
// operator (!) in other logic comparisons. Rename the variable as appropriate.


/*
Part 2: Practical Math

Let’s look at a more practical scenario.
You are planning a cross-country road trip!
  The distance of the trip, in total, is 1,500 miles.
  Your car’s fuel efficiency is as follows:
    At 55 miles per hour, you get 30 miles per gallon.
    At 60 miles per hour, you get 28 miles per gallon.
    At 75 miles per hour, you get 23 miles per gallon.
  You have a fuel budget of $175.
  The average cost of fuel is $3 per gallon.

Set up a program to answer the following questions:
  How many gallons of fuel will you need for the entire trip?
  Will your budget be enough to cover the fuel expense?
  How long will the trip take, in hours?

Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

Log the results of your calculations using string concatenation or template literals.
*/

let totalGalAt55 = (1500 / 30) * 3;
console.log(`\nTotal cost of gas at 55 mph: $` + totalGalAt55);
let hoursAt55 = 1500 / 55;
console.log(`Hours trip will take at 55 mph: ` + hoursAt55 + `hrs`);
let isEnoughGasAt55 = (175 - totalGalAt55) >= 0;
console.log(`Is $175 enough for gas at 55 mph: ` + isEnoughGasAt55);
console.log(`\n`);

let totalGalAt65 = (1500 / 28)* 3;
console.log(`Total cost of gas at 65 mph: $` + totalGalAt65);
let hoursAt65 = 1500 / 65;
console.log(`Hours trip will take: ` + hoursAt65 + `hrs`);
let isEnoughGasAt65 = (175 - totalGalAt65) >= 0;
console.log(`Is $175 enough for gas at 65 mph: ` + isEnoughGasAt65);
console.log(`\n`);

let totalGalAt75 = (1500 / 23) * 3;
console.log(`Total cost of gas at 75 mph: $` + totalGalAt75);
let hoursAt75 = 1500 / 75;
console.log(`Hours trip will take: ` + hoursAt75 + `hrs`);
let isEnoughGasAt75 = (175 - totalGalAt75) >= 0;
console.log(`Is $175 enough for gas at 75 mph: ` + isEnoughGasAt75);

console.log(`\nBest to travel at 65 mph.`)