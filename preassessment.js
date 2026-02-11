/*
Trends in Web Development Assignment 0
Name:
NetID:
*/

// @ts-check

/**
 * Question 1: Arrays
 *
 * Complete the function below. It should return the sum of the numbers in an array.
 *
 * @param {number[]} inputArray
 * @returns {number}
 */
function mySum(inputArray) {
  let total = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  
  return total;
}

/**
 * Write a function that returns the sum of the numbers in an array.
 *
 * Complete the function blow that checks if a year is a leap year or not.
 *
 * A leap year is defined as any year that is divisible by 4. However, a year
 * divisible by 100 is NOT a leap year, unless it is also divisible by 400.
 *
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Question 3: isPrime
 *
 * Complete the function below that checks if a number is prime.
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  
  if (n < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Question 4: Control flow
 *
 * Write a function that takes a given array, and returns a new array containing
 * only the elements that are perfect squares.
 *
 * @param {number[]} inputArray
 * @returns {number[]}
 */
function perfectSquares(inputArray) {
  const results = [];
  
  for (const num of inputArray) {
    if (num >= 0 && Number.isInteger(Math.sqrt(num))) {
      results.push(num);
    }
  }
  return results;
}

module.exports = { mySum, isLeapYear, isPrime, perfectSquares };
