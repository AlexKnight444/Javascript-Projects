// Assignment 6: Arrays, Objects, and Core Methods

function main() {
  const products = [
    { name: "Laptop",   price: 800 },
    { name: "Mouse",    price: 25 },
    { name: "Keyboard", price: 45 }
  ];

  log("-- All Products (forEach) --");
  products.forEach(product => {
    log(`Item: ${product.name} - Price: $${product.price}`);
  });

  log("-- Filtered Products (Price < $50) --");
  const cheapProducts = products.filter(product => product.price < 50);
  log(cheapProducts);

  log("-- Mapped Product Tags (map) --");
  const tags = products.map(product => `${product.name.toUpperCase()} costs $${product.price}`);
  log(tags);
}
