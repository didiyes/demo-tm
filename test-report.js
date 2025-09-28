const fs = require("fs");

let report = `
<html>
<head>
  <title>Test Report</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    h1 { color: #2c3e50; }
    .pass { color: green; font-weight: bold; }
    .fail { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <h1>QA Test Report</h1>
`;

console.log("Running tests...");

// Test simplu
const sum = (a, b) => a + b;
try {
  if (sum(2, 3) !== 5) throw new Error("sum(2,3) should be 5");
  console.log("Test 1 passed ✅");
  report += `<p class="pass">Test 1: sum(2,3) = 5 ✅</p>`;
} catch (err) {
  console.error("Test 1 failed ❌", err.message);
  report += `<p class="fail">Test 1 failed ❌: ${err.message}</p>`;
}

report += `
</body>
</html>
`;

fs.writeFileSync("report.html", report);
console.log("Report generated: report.html");
