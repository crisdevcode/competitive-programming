// Input:
//  - haystack: string
//  - needle:   string
// Output:
//  - number

function firstOccurrence(haystack, needle) {
  return haystack.indexOf(needle);
}

// Examples
const haystack1 = 'sadbutsad', needle1 = 'sad';
const haystack2 = 'leetcode',  needle2 = 'leeto';

console.log(firstOccurrence(haystack2, needle2));
