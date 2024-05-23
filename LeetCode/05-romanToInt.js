
// Input:  string
// Output: number

function romanToInt(s) {

  let convertedNum = 0;

  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let currentNum = symbols[s[i]];
    let nextNum = symbols[s[i + 1]];

    if (currentNum < nextNum) {
      convertedNum -= currentNum;
    } else {
      convertedNum += currentNum;
    }
  }

  return convertedNum;
}

// Examples
const data1 = 'III';     // => 3
const data2 = 'LVIII';   // => 58
const data3 = 'MCMXCIV'; // => 1994
const data4 = 'IV';      // => 4

console.log(romanToInt(data4));
