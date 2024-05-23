// Hashmap

// Input:
//  - ransomNote: string
//  - magazine:   string
// Output:
//  - boolean

function canConstruct(ransomNote, magazine) {
  
  let letterCount = new Map();

  for (let char of magazine) {
    if (letterCount.has(char)) {
      letterCount.set(char, letterCount.get(char) + 1);
    } else {
      letterCount.set(char, 1);
    }
  }

  for (let char of ransomNote) {
    if (!letterCount.has(char) || letterCount.get(char) === 0) {
      return false;
    }
    letterCount.set(char, letterCount.get(char) - 1);
  }

  return true;
}

// Examples
const ransomNote1 = 'a';
const magazine1 = 'b';
// => false

const ransomNote2 = 'aa';
const magazine2 = 'ab';
// => false

const ransomNote3 = 'aa';
const magazine3 = 'aab';
// => true

const ransomNote4 = 'bg';
const magazine4 = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj';
// => true

console.log(canConstruct(ransomNote4, magazine4));
