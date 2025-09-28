console.log("Hello from CI/CD pipeline!");

// Un mic test de bază
const sum = (a, b) => a + b;
if (sum(2, 3) !== 5) {
  throw new Error("Test failed ❌: sum(2,3) should be 5");
} else {
  console.log("Test passed ✅");
}
