// Input: number
// Output: number
// Examples:
//  12 ==> 21
//  513 ==> 531
//  2017 ==> 2071

function nextBigger(n) {
  let digits = n.toString().split('');

  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] >= digits[i]) {
    i--;
  }

  if (i === 0) {
    return -1;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i - 1]) {
    j--;
  }

  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  let temp = digits.splice(i);
  temp.sort();
  digits = digits.concat(temp);

  let result = parseInt(digits.join(''));

  return result;
}

const data1 = 12; //   => 21
const data2 = 513; //  => 531
const data3 = 2017; // => 2071
const data4 = 414; //  => 441

console.log(nextBigger(data4));
