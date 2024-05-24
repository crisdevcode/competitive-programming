// Sliding Window

// Input
//  - target: number
//  - nums:   number[]
// Output
//  number

function minSubArrayLen(target, nums) {

  let n = nums.length;
  let minLength = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

const target1 = 7;
const nums1 = [2, 3, 1, 2, 4, 3];
// => 2, [4,3]

const target2 = 1;
const nums2 = [1, 4, 4];
// => 1, [4]

const target3 = 11;
const nums3 = [1, 1, 1, 1, 1, 1, 1, 1];
// => 0, []

console.log(minSubArrayLen(target3, nums3));
