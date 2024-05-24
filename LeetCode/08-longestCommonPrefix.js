// Input:  string[]
// Output: string

function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

// Examples

const data1 = ['flower', 'flow', 'flight']; // => "fl"
const data2 = ['dog', 'racecar', 'car'];    // => ""

console.log(longestCommonPrefix(data2));
