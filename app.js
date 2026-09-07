// Simple Student Result Application

function calculateResult(marks) {
  if (marks >= 40) {
    return "PASS";
  }

  return "FAIL";
}

const studentName = "Arani";
const marks = 75;

const result = calculateResult(marks);

console.log(`Student: ${studentName}`);
console.log(`Marks: ${marks}`);
console.log(`Result: ${result}`);

module.exports = { calculateResult };
