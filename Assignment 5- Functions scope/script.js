// Assignment 5: Function Architecture and Scope

// Standard (declaration) function with default parameters
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const rectangleAreaArrow = (length = 5, width = 4) => length * width;

function main() {
  log(`Standard Function Area (Default 5x4): ${rectangleArea()}`);
  log(`Arrow Function Area (Custom 10x3): ${rectangleAreaArrow(10, 3)}`);

  // --- Scope demonstration ---
  // Block scope: let/const live only inside { }
  {
    let blockVar = "I only exist inside this block";
    const blockConst = "Me too";
  }
  try {
    log(blockVar);  // not accessible here -> ReferenceError
  } catch (error) {
    log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
  }

  // Function scope: variables declared inside a function stay inside it
  function showFunctionScope() {
    var functionVar = "I only exist inside this function";
    return functionVar;
  }
  showFunctionScope();
  try {
    log(functionVar);
  } catch (error) {
    log(`Function Scope Error: ${error.name}: ${error.message}`);
  }
}
