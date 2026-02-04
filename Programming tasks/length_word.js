function lengthLastWord(word) {
//   1) Trim trailing spaces
  let trimmedString = word.trim();
  
  // 2) Split the trimmed string
  let words = trimmedString.split(" ");
  
//   // 3) Check if words array has length
  if (words.length == 0) {
    return 0;
  }
  
//   // 4) Return length of last element in the array
  return words[words.length - 1].length;
}

// Fill in the blanks, then test:
console.log(lengthLastWord("Hello World")); // Expect 5
console.log(lengthLastWord("Learning is fun")); // Expect 3
console.log(lengthLastWord("     ")); // Expect 0