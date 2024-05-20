
// Input: number[]
// Output: number

function majorityElement(nums) {
  const map = {};
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let num = nums[i];
    map[num] = (map[num] || 0) + 1;

    if (map[num] > Math.floor(n / 2)) {
      return num;
    }
  }
}

// Examples:
const data1 = [3, 2, 3];          // => 3
const data2 = [2, 2, 1, 1, 2, 2]; // => 2

console.log(majorityElement(data2));
