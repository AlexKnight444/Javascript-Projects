// Assignment 2: Operators, Expressions, and Input Handling

// Asks until the user gives a valid non-negative number (or cancels).
function askNumber(message, defaultValue) {
  const raw = prompt(message, defaultValue);
  if (raw === null) return Number(defaultValue);   // user pressed Cancel -> use default
  const value = Number(raw);                       // explicit type conversion
  if (raw.trim() === "" || Number.isNaN(value) || value < 0) {
    alert("Invalid input - using default value " + defaultValue);
    return Number(defaultValue);
  }
  return value;
}

function main() {
  const subtotal = askNumber("Enter the bill amount ($):", "100");
  const tipPercent = askNumber("Enter the tip percentage (%):", "15");

  let tip = subtotal * tipPercent / 100;   // arithmetic operators
  let total = subtotal;
  total += tip;                            // assignment operator (+=)

  log(`Subtotal: $${subtotal}`);
  log(`Tip Percentage: ${tipPercent}%`);
  log(`Calculated Tip: $${tip}`);
  log(`Total Amount to Pay: $${total}`);
}
