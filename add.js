const prompt = require('prompt-sync')();

function sum(a, b) {
  return a + b;
}

// Export the function for testing
module.exports = { sum };

// Only run prompts if executed directly (not during testing)
if (require.main === module) {
  const a = parseInt(prompt("Enter the first number: "));
  const b = parseInt(prompt("Enter the second number: "));
  console.log("Sum is:", sum(a, b));
}