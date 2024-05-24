// Input
//  - nums: number[]
// Output
//  boolean

function jumpGame(nums) {

  let target = nums.length - 1;
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= target) {
      return true;
    }
  }

}

// Examples
const nums1 = [2, 3, 1, 1, 4]; // => true
const nums2 = [3, 2, 1, 0, 4]; // => false

console.log(jumpGame(nums2));
