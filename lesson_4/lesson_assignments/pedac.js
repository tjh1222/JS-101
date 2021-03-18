// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []


//<--------------PEDAC Practice------------->

//input: string
//output: an array of substrings that are palindromes

//explicit requirements:
// Find all substrings that are case sensitive palindromes and 
// return them in an array datastructure

//implicit requirements:
//if there are no palindromes return an empty array.
//if the input string is "" return an empty array.

//questions to ask
// what kind of input validation is required? Do i need to check
// for non string inputs