
function digitalRoot(n) {
  
  // Calculate the result of the sum
  const total = sumDigits(n);

  // If the sum has only one digit
  if (total.toString().length === 1) {
    return total;
  }

  // If the sum has more than one digit
  return digitalRoot(total);
}

const sumDigits = (n) => {

  // Convert n to string
  const nString = n.toString();

  let total = 0;

  // Sum each digit
  for (let i = 0; i < nString.length; i++) {
    let numValue = +nString[i];
    total += numValue;
  }

  return total;
};

const data1 = 16;
const data2 = 942;
const data3 = 132189;
const data4 = 493193;

console.log(digitalRoot(data4));
