
//  var a = 5;
//  var b = 10;
//  what will be the value of a?

//* -------------------------
//  * Scope Chaining:
//* -------------------------
// * Global Scope:
//? Variables: Variables declared outside of any function or block have global scope.
//? Access: Global variables are accessible from any part of the code, including inside functions and blocks.

//  var globalVariable = "I am a global variable";

// function exampleFunction() {
//   console.log(globalVariable); // Accessible within the function
// }

// console.log(globalVariable); // Accessible globally

//  *Function Scope:
// Variables: Variables declared inside a function have function scope.
// Access: Function-scoped variables are only accessible within the function where they are declared.
//  function exampleFunction() {
//     var functionScopedVar = "I am a function-scoped variable";
//     console.log(functionScopedVar); // Accessible within the function
//   }

// console.log(functionScopedVar); // Error: functionScopedVar is not defined

//  * Block Scope:
// Variables: Variables declared with let and const inside a block (e.g., an if statement or a for loop) have block scope.
// Access: Block-scoped variables are only accessible within the block where they are declared.

//! ------------------------------
// ! Interview Question
//! -----------------------------

//!  Global Variable vs. Local Variable:

const globalVariable = "I'm a global variable";

function myFunction() {
  // Function scope
  const functionVariable = "I'm a function variable";

  if (true) {
    // Block scope
    const blockVariable = "I'm a block variable";
  }

  console.log(functionVariable);
}

myFunction();
