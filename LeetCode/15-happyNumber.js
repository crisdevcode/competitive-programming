// HashMap

// Input
//  n
// Output
//  boolean

function isHappy(n) {
  let seenNumbers = new Set();

  while (n !== 1 && !seenNumbers.has(n)) {
    seenNumbers.add(n);
    n = sumOfSquares(n);
  }

  return n === 1;
}

function sumOfSquares(num) {
  return num.toString().split('').reduce((sum, current) => (sum += (+current) ** 2), 0);
}

// Examples
const n1 = 19; // => true
const n2 = 2;  // => false
const n3 = 7;  // => true

console.log(isHappy(n3));
