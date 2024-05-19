// Input:
//  - nums: number[]
//  - val:  number
// Output:
//  - number

function removeElement(nums, val) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = '_';
    }
  }

  nums.sort();

  let counter = 0;
  for (let num of nums) {
    if (typeof num !== 'string') {
      counter++;
    }
  }

  return counter;
  
}

// Examples
const nums1 = [3, 2, 2, 3], val1 = 3; // => 2, nums = [2,2,_,_]
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2], val2 = 2; // => 5, nums = [0,1,4,0,3,_,_,_]

console.log(removeElement(nums1, val1));
