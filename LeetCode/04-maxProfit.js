
// Input:  number[]
// Output: number

function maxProfit(prices) {

  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      let currentProfit = price - minPrice;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }

  return maxProfit;
}

// Examples

const data1 = [7, 1, 5, 3, 6, 4];    // => 5
const data2 = [7, 6, 4, 3, 1];       // => 0
const data3 = [2, 4, 1];             // => 2
const data4 = [3, 2, 6, 5, 0, 3];    // => 4
const data5 = [2, 1, 2, 1, 0, 1, 2]; // => 2

console.log(maxProfit(data5));
