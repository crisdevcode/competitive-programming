// Two Pointers

// Input:  string
// Output: boolean

function isPalindrome(s) {

  // Remove all non-alphanumeric characters
  const filteredStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = filteredStr.length - 1;

  while (left < right) {
    if (filteredStr[left] !== filteredStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Examples:

const data1 = 'A man, a plan, a canal: Panama'; // => true
const data2 = 'race a car';                     // => false
const data3 = ' ';                              // => true

console.log(isPalindrome(data1));
