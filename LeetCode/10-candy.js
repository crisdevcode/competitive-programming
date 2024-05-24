// Arrays & Strings

// Input
//  ratings: number[]
// Output
//  number

function candy(ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, candy) => sum + candy, 0);
}

// Examples
const data1 = [1, 0, 2];   // => 5
const data2 = [1, 2, 2];

console.log(candy(data2)); // => 4
