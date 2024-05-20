// Input:  string
// Output: number

function lengthOfLastWord(s) {
  const strArray = s.trim().split(' ');
  return strArray[strArray.length - 1].length;
}

// Examples:
const data1 = 'Hello World';                 // => 5
const data2 = '   fly me   to   the moon  '; // => 4
const data3 = 'luffy is still joyboy';       // => 6

console.log(lengthOfLastWord(data1));
