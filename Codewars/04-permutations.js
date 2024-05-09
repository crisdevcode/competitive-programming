// Create permutations of a non-empty string
// Remove duplicated permutations

// Input:  string
// Output: string[]

function permutations(string) {

  if (string.length <= 1) {
    return [string];
  }

  const firstChar = string[0];
  const restChars = string.slice(1);

  const restOfPermutations = permutations(restChars);

  const result = new Set();

  for (const perm of restOfPermutations) {
    for (let i = 0; i <= perm.length; i++) {
      const newPermutation = perm.slice(0, i) + firstChar + perm.slice(i);
      result.add(newPermutation);
    }
  }

  return Array.from(result);
}

const data1 = "a";
// => ['a']

const data2 = "ab";
// => ['ab', 'ba']

const data3 = "abc";
// => ['abc','acb','bac','bca','cab','cba']

const data4 = "aabb";
// => ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

console.log(permutations(data3));
