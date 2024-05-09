// Input => number[][] => 2D array n x n
// Output => number[]

function snailSort(array) {
  let finalArray = [];
  
  while(array.length){

    finalArray.push(...array.shift())

    for (let i = 0; i < array.length; i++){
      finalArray.push(array[i].pop())
    }

    finalArray.push(...(array.pop() || []).reverse())

    for (let i = array.length - 1; i >= 0; i--){
      finalArray.push(array[i].shift())
    }

  }
  
  return finalArray
}

const snail = (arr) => {
  let finalArray = [];

  while (arr.length) {
    finalArray.push(...arr.shift());
    arr.map(row => finalArray.push(row.pop()))
    arr.reverse().map(row => row.reverse());
  }
  return finalArray
}

const data1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// [1,2,3,6,9,8,7,4,5]

const data2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
// [1,2,3,4,5,6,7,8,9]

const data3 = [
  [1,   2,  3,  4],
  [5,   6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16],
];
// [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

const data4 = [];
// [[]]

const data5 = [
  [1,   2,  3,  4, 5],
  [6,   7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

console.log(snailSort(data3));
