// Shared helper: prints to the browser console AND to the <pre id="output"> box on the page.
// Arrays/objects are formatted Node-style, e.g. [ { name: 'Mouse', price: 25 } ] or [ "A", "B" ]
function inspect(value) {
  if (typeof value === "string") return value;
  return format(value);
}

function format(value, insideObject = false) {
  if (typeof value === "string") return insideObject ? `'${value}'` : JSON.stringify(value);
  if (Array.isArray(value)) {
    return value.length === 0 ? "[]" : "[ " + value.map(v => format(v)).join(", ") + " ]";
  }
  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value).map(([k, v]) => `${k}: ${format(v, true)}`);
    return entries.length === 0 ? "{}" : "{ " + entries.join(", ") + " }";
  }
  return String(value);
}

function log(...args) {
  console.log(...args);
  const out = document.getElementById("output");
  if (out) out.textContent += args.map(inspect).join(" ") + "\n";
}
