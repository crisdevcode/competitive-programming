// Input:  string
// Output: string
// Examples:
//  foo => foo1
//  foobar23 => foobar24

function incrementString(str) {

  const regex = /(\d+)$/;
  const numRegex = str.match(regex);

  if (numRegex) {
    const numStr = numRegex[0];

    let incrementedStr = (parseInt(numStr, 10) + 1).toString();

    while (incrementedStr.length < numStr.length) {
      incrementedStr = '0' + incrementedStr;
    }

    return str.replace(regex, incrementedStr);
  } else {
    return str + 1;
  }
}

const data1 = 'foo';       // => foo1
const data2 = 'foobar23';  // => foobar24
const data3 = 'foo0042';   // => foo0043
const data4 = 'foo9';      // => foo10
const data5 = 'foo099';    // => foo100
const data6 = 'foobar000'; // => foobar001
const data7 = 'foobar999'; // => foobar1000

console.log(incrementString(data7));
