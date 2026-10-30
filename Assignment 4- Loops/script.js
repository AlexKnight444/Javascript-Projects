// Assignment 4: Loop Control Structures

function main() {
  // 1) for loop - multiplication table of 5
  log("-- Multiplication Table of 5 --");
  for (let i = 1; i <= 5; i++) {
    log(`5 x ${i} = ${5 * i}`);
  }

  // 2) while loop with break - first number > 10 divisible by 6
  log("-- First number > 10 divisible by 6 --");
  let n = 11;
  while (true) {
    if (n % 6 === 0) {
      log(`Found: ${n}`);
      break;               // stop as soon as we find it
    }
    n++;
  }

  // 3) do...while loop with continue - skip multiples of 3 (numbers 1 to 10)
  log("-- Numbers 1 to 10 (skipping multiples of 3) --");
  let k = 0;
  do {
    k++;
    if (k % 3 === 0) {
      continue;            // skip this number
    }
    log(k);
  } while (k < 10);
}
