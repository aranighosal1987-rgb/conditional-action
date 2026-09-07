```javascript
const { calculateResult } = require("./app");

console.log("Running tests...");

// Test 1
if (calculateResult(75) !== "PASS") {
  throw new Error("Test failed: 75 should be PASS");
}

// Test 2
if (calculateResult(40) !== "PASS") {
  throw new Error("Test failed: 40 should be PASS");
}

// Test 3
if (calculateResult(30) !== "FAIL") {
  throw new Error("Test failed: 30 should be FAIL");
}

console.log("All tests passed successfully!");
```