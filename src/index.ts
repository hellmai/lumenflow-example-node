/**
 * Example Node.js/TypeScript project demonstrating LumenFlow workflow
 * 
 * This simple calculator module shows how TDD and LumenFlow gates work.
 */

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Main entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('LumenFlow Example Node.js Project');
  console.log('2 + 3 =', add(2, 3));
  console.log('5 - 2 =', subtract(5, 2));
  console.log('4 * 3 =', multiply(4, 3));
  console.log('10 / 2 =', divide(10, 2));
}
