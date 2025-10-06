function countVowels(str) {
  let vowelCount = 0; // Initialize a counter for vowels
  const vowels = "aeiouAEIOU"; // store vowels in a sperate string

  // Loop through each character in the given string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is a vowel
    if (vowels.includes(str[i])) {
      vowelCount++; // If it is, increase the counter by 1
    }
  }

  return vowelCount; // Return the total number of vowels found
}

// Test the function
console.log(countVowels("Hello World")); // Output: 3
