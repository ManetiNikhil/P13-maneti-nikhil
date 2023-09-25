function counter() {
    // Initialize a count variable with 0
    let count = 0;
  
    // Return a function that increments and returns the count
    return function () {
      count++;
      return count;
    };
  }
  
  // Create two instances of the counter function
  const firstCounter = counter();
  const secondCounter = counter();
  
  // Call the firstCounter function five times and store the returned values in an array
  const firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  // Call the secondCounter function three times and store the returned values in an array
  const secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log("firstValues array:", firstValues);
  console.log("secondValues array:", secondValues);
  