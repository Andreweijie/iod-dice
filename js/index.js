function generateResult(sides) {
  return Math.floor(Math.random() * (sides - 1 + 1) + 1);
}

function displayResult(result) {
  document.getElementById("result").innerText = result;
}

function rollDie() {
  let currentlySelectedNumberOfSides =
    document.getElementById("numberOfSides").value;

  let result = generateResult(currentlySelectedNumberOfSides);

  displayResult(result);
}

/* tests */

let exampleResult = generateResult(10);

if (exampleResult <= 10 && exampleResult >= 1) {
  console.log("generate test passed!");
} else {
  throw new Error(
    `expected number to be between 1 and 10, instead got: ${exampleResult}`
  );
}

displayResult("0");

let currentResult = document.getElementById("result").innerText;

if (currentResult == "0") {
  console.log("display test passed!");
} else {
  throw new Error(`expected 0 but got: ${currentResult}`);
}
