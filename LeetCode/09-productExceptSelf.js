// Arrays & Strings

// Input
//  - nums: number[]
// Output
//  - number[]

function productExceptSelf(nums) {
  const length = nums.length;
  const answer = new Array(length);

  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * R;
    R *= nums[i];
  }

  return answer;
}

const data1 = [1, 2, 3, 4];      // => [24,12,8,6]
const data2 = [-1, 1, 0, -3, 3]; // => [0,0,9,0,0]

console.log(productExceptSelf(data2));
