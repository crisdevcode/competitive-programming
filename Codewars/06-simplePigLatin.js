// Input: string
// Output: string
// Examples:
//  'Pig latin is cool' => 'igPay atinlay siay oolcay'
//  'Hello world !'     => 'elloHay orldway !'

function pigIt(str) {

  const strArr = str.split(' ');
  const strArrWithInvertWords = [];

  for (let i = 0; i < strArr.length; i++) {
    let word = convertWord(strArr[i]);
    strArrWithInvertWords.push(word);
  }

  return strArrWithInvertWords.join(' ');
}

const convertWord = (word) => {

  const firstChar = word[0];
  const restChars = word.slice(1);

  if (word.charCodeAt(word[word.length - 1]) >= 33 && word.charCodeAt(word[word.length - 1]) <= 63) {
    return restChars + firstChar;
  }

  return restChars + firstChar + 'ay';
};

// With Regex
function pigItRegex(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

const data1 = 'Pig latin is cool'; // => 'igPay atinlay siay oolcay'
const data2 = 'Hello world !'; // => 'elloHay orldway !'

console.log(pigItRegex(data2));
