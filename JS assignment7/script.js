function calcWordFrequencies() {
    const input = prompt("Enter a list of words (separated by spaces):");
  
    // Check if the user clicked "Cancel" or provided an empty input
    if (input === null || input.trim() === "") {
      console.log("No input provided.");
      return;
    }
  
    // Split the input into an array of words
    const words = input.trim().split(" ");
  
    // Create a map to store word frequencies
    const wordFrequencyMap = new Map();
  
    // Iterate over the words array and update word frequencies
    for (const word of words) {
      // If the word is already in the map, increment its frequency; otherwise, add it with a frequency of 1
      if (wordFrequencyMap.has(word)) {
        wordFrequencyMap.set(word, wordFrequencyMap.get(word) + 1);
      } else {
        wordFrequencyMap.set(word, 1);
      }
    }
  
    // Output word frequencies to the console
    wordFrequencyMap.forEach((frequency, word) => {
      console.log(`${word} ${frequency}`);
    });
  }
  
  // Call the calcWordFrequencies function to prompt the user for input and display word frequencies
  calcWordFrequencies();
  