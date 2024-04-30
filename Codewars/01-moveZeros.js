
function moveZeros(arr) {

  let zerosCount = 0;
  let arrWithoutZeros = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      zerosCount++;
      continue;
    }
    arrWithoutZeros.push(arr[i])
  }

  const zerosArray = Array(zerosCount).fill(0)

  return [...arrWithoutZeros, ...zerosArray]

}

const data = [false,1,0,1,2,0,1,3,"a"]
console.log(moveZeros(data))