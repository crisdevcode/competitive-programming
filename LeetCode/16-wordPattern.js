// Input
//  pattern: string
//  s:       string
// Output
//  boolean

function wordPattern(pattern, s) {

  let words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }

  let charToWord = new Map();
  let wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    if (!charToWord.has(char) && !wordToChar.has(word)) {
      charToWord.set(char, word);
      wordToChar.set(word, char);
    } else {
      if (charToWord.get(char) !== word || wordToChar.get(word) !== char) {
        return false;
      }
    }
  }

  return true;
  
}

// Examples

const pattern1 = 'abba';
const s1 = 'dog cat cat dog';
// => true

const pattern2 = 'abba';
const s2 = 'dog cat cat fish';
// => false

const pattern3 = 'aaaa';
const s3 = 'dog cat cat dog"';
// => false

console.log(wordPattern(pattern3, s3));
