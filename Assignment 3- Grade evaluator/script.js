// Assignment 3: Conditional Logic Implementation

function getGrade(score) {
  // switch on the tens digit of the score (e.g. 85 -> 8)
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:  return "A";
    case 8:  return "B";
    case 7:  return "C";
    case 6:  return "D";
    default: return "F";
  }
}

function main() {
  const raw = prompt("Enter your test score (0-100):", "85");
  const score = Number(raw);

  // if...else : validate the input
  if (raw === null || raw.trim() === "" || Number.isNaN(score)) {
    log("Invalid input: please enter a number.");
  } else if (score < 0 || score > 100) {
    log("Invalid input: score must be between 0 and 100.");
  } else {
    const grade = getGrade(score);
    // ternary operator : pass/fail (pass mark = 40)
    const status = score >= 40 ? "Passed" : "Failed";

    log(`Score: ${score}`);
    log(`Grade: ${grade}`);
    log(`Status: ${status}`);
  }
}
