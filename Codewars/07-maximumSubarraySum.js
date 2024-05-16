
// Input: number[]
// Output: number
// Examples:
//  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//  => 6: [4, -1, 2, 1]

function maxSequence(nums) {

  if(nums.length === 0) return 0;
  if(nums.every(num => num < 0)) return 0;

  let maxTotal = nums[0];
  let maxCurrent = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxTotal) {
      maxTotal = maxCurrent;
    }
  }

  return maxTotal;
}


const data1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // => 6
const data2 = [2, -3, 2, 2, 0]; // => 4
const data3 = [-5, -3, -1, -4, -2]; // => 0
const data4= []; // => 0

console.log(maxSequence(data4))