// Assignment 1: Variables, Data Types, and Console Operations

function main() {
  var userName = "Sahil";
  let age = 25;
  const isEmployed = true;
  const skills = ["HTML", "CSS", "JavaScript"];

  log(`Name: ${userName} (Type: ${typeof userName})`);
  log(`Age: ${age} (Type: ${typeof age})`);
  log(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
  const skillsText = "[" + skills.map(s => `"${s}"`).join(", ") + "]";   // ["HTML", "CSS", "JavaScript", "Java", "Python", "React"]
  log(`Skills: ${skillsText} (Type: ${typeof skills})`);
}
