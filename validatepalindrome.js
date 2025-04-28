// validatepalindrome.js

const inputStrings = ["racecar", "hello", "Level", "I", "world", "mad am", "12321", "not a palindrome"];

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

function findPalindromes(strings) {
  return strings.filter(isPalindrome);
}

const palindromes = findPalindromes(inputStrings);
console.log("Palindromes found:", palindromes);
