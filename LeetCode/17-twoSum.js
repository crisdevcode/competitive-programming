// Hashmap

// Input
//  nums:   number[]
//  target: number
// Output
//  number[]

function twoSum(nums, target) {
  let numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }

    numIndices[nums[i]] = i;
  }
}

// Examples
const nums1 = [2, 7, 11, 15];
const target1 = 9;
// => [0,1]

const nums2 = [3, 2, 4];
const target2 = 6;
// => [1,2]

const nums3 = [3, 3];
const target3 = 6;
// => [0,1]

console.log(twoSum(nums3, target3));
