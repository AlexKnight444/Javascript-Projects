// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// Combines: variables, prompt input, if/else, switch, loops (break/continue),
// regular + arrow functions, scope, forEach / filter / map.

// ---------- 1. Data ----------
const MAX_ATTEMPTS = 3;
const AFFORDABLE_LIMIT = 200;

// ---------- 2. Control flow: category badges ----------
// Price thresholds: < 50 Budget, 50-499 Standard, >= 500 Premium
function getCategory(price) {
  switch (true) {
    case price >= 500: return "Premium";
    case price >= 50:  return "Standard";
    default:           return "Budget";
  }
}

// if...else validation
function isValidProduct(name, price) {
  if (typeof name !== "string" || name.trim() === "") return false;
  if (Number.isNaN(price) || price <= 0) return false;
  return true;
}

// ---------- 3. Loops: input handling with break / continue ----------
// Asks up to MAX_ATTEMPTS times; bad or missing input is skipped with `continue`,
// good input stops the loop with `break`. Returns null if the user never gives valid data.
function askForProduct(defaultName, defaultPrice) {
  let product = null;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const rawName = prompt("Enter new product name:", defaultName);
    const rawPrice = prompt("Enter product price ($):", defaultPrice);

    if (rawName === null || rawPrice === null) {   // user pressed Cancel
      log("Input cancelled by user.");
      break;
    }

    const name = rawName.trim();
    const price = Number(rawPrice);                // explicit conversion

    if (!isValidProduct(name, price)) {
      log(`Invalid input (attempt ${attempt}/${MAX_ATTEMPTS}). Try again.`);
      continue;                                    // skip to next attempt
    }

    product = { name, price };
    break;                                         // valid -> stop asking
  }
  return product;
}

// Linear search through the inventory (loop with break)
function findProductIndex(inventory, name) {
  let foundAt = -1;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      foundAt = i;
      break;
    }
  }
  return foundAt;
}

// ---------- 4. Functions & scope ----------
// Regular function
function calculateTotal(items) {
  let total = 0;                       // local variable - not visible outside
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// Arrow functions with default parameters (custom tax / discount)
const applyTax = (amount, taxPercent = 18) => amount + (amount * taxPercent) / 100;
const applyDiscount = (amount, discountPercent = 10) => amount - (amount * discountPercent) / 100;

// Closure: keeps the inventory private - only the returned methods can touch it
function createInventory(initialItems) {
  const items = [...initialItems];     // private data (secure local scope)
  return {
    add: product => items.push({ ...product, category: getCategory(product.price) }),
    getAll: () => [...items],
    findIndex: name => findProductIndex(items, name)
  };
}

// ---------- Main program ----------
function main() {
  log("--- Initializing Inventory System ---");

  const inventory = createInventory([
    { name: "Laptop", price: 800, category: getCategory(800) },
    { name: "Mouse",  price: 25,  category: getCategory(25) }
  ]);

  const newProduct = askForProduct("Monitor", "150");

  if (newProduct === null) {
    log("No valid product was added. Continuing with existing items.");
  } else if (inventory.findIndex(newProduct.name) !== -1) {
    log(`"${newProduct.name}" already exists in the inventory - not added again.`);
  } else {
    inventory.add(newProduct);
    log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);
  }

  const items = inventory.getAll();

  // ---------- 5. Array methods ----------
  log("--- Processing Inventory Roster (forEach) ---");
  items.forEach(item => {
    log(`* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`);
  });

  log("--- Financial Analytics ---");
  log(`Total Inventory Value: $${calculateTotal(items)}`);

  const affordable = items
    .filter(item => item.price < AFFORDABLE_LIMIT)
    .map(item => item.name);
  log(`Filtered Affordable Items (Under $${AFFORDABLE_LIMIT}):`, affordable);

  const report = items.map(item => `${item.name.toUpperCase()}: $${item.price}`);
  log("Formatted Report List:", report);

  // Bonus: custom tax / discount parameters
  log("--- Bonus: Tax & Discount ---");
  const total = calculateTotal(items);
  log(`Total with 18% tax (default): $${applyTax(total).toFixed(2)}`);
  log(`Total with 5% tax: $${applyTax(total, 5).toFixed(2)}`);
  log(`Total after 10% discount (default): $${applyDiscount(total).toFixed(2)}`);
}
