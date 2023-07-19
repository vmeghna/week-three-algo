// 1.Palindrome Checker: Write a function that takes a string as input and returns true if it
// is a palindrome (reads the same backward as forward), and false otherwise. Ignore
// spaces, punctuation, and capitalization.
function checkpalindrome(str) {
  const words = str.split(""); //covert str to arr//
  const reverse = words.reverse("");
  const join = reverse.join(""); //arr to str//
  if (str == join) {
    console.log("it is pallindrome");
  } else {
    console.log(" false , it is not a pallindrome");
  }
}
//i/p//
const str = "mom";
checkpalindrome(str);

// 2.FizzBuzz: Write a function that prints numbers from 1 to 100. For multiples of 3, print
// &quot;Fizz&quot; instead of the number. For multiples of 5, print &quot;Buzz&quot; instead of the number. For
// numbers that are multiples of both 3 and 5, print &quot;FizzBuzz.&quot;
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// 3.Factorial: Write a function that calculates the factorial of a given positive integer. The
// factorial of a non-negative integer n is the product of all positive integers less than or
// equal to n.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const num = 5;
const result = factorial(num);
console.log(result);

// 4.Prime Number: Write a function that determines if a given number is a prime number
// (greater than 1 and only divisible by 1 and itself).
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
const numOne = 17;
console.log(isPrime(numOne));

// 5.Fibonacci Sequence: Write a function that generates the nth Fibonacci number. The
// Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the
// two preceding ones.
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const n = 6;
const results = fibonacci(n);
console.log(results);

// 6.Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ...,
// n, write a function to find the missing number. The array is not sorted, and there is only
// one missing number.
function missingNumber(nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }
  return sum;
}
const numbers = [5, 4, 0, 1, 2];
const missing = missingNumber(numbers);
console.log(missing);

// 7.Reverse a String: Write a function that takes a string as input and returns the string
// reversed.
function ReverseString(str) {
  return str.split("").reverse().join("");
}
const inputString = "bakshaa bhai";
const reversedString = ReverseString(inputString);
console.log(reversedString);

// 8.Title Case: Write a function that takes a sentence as input and returns the sentence in
// title case (the first letter of each word is capitalized).
function titleCase(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}
const input = "whenever sick call dr.vp";
const output = titleCase(input);
console.log(output);

// 9.Anagram Checker: Write a function that checks whether two given strings are
// anagrams of each other (contain the same characters but in a different order).
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
const string1 = "race car";
const string2 = "car race";
console.log(checkAnagram(string1, string2));

// 10.Longest Word: Write a function that takes a sentence as input and returns the
// longest word in the sentence. If there are multiple words with the same length, return
// the first one.
// function findLongestWord(string) {//rectify the error//
//   let str = string.split("");
//   let longestWord = 0;
//   let word = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.length > longestWord) {
//       longestWord = str.length;
//       word = str;
//     }
//   }
//   return word;
// }

//correct method//
function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
const inputs = "her dream is to wander paris with him";
const longestWord = findLongestWord(inputs);
console.log(longestWord);
