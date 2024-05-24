// Arrays & Strings

// Input:
//  - nums: number[]
// Output:
//  - number

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
}

const data1 = [1, 1, 2];                      // => 2, [1,2,_]
const data2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // => 5, [0,1,2,3,4,_,_,_,_,_]
const data3 = [-3, -1, 0, 0, 0, 3, 3];        // => 4, [-3,-1,0,3]

console.log(removeDuplicates(data3));
