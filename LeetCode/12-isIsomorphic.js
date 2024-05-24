// HashMap

// Input:
//  s: string
//  t: string
// Output:
//  boolean

function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((mapST.has(charS) && mapST.get(charS) !== charT) || (mapTS.has(charT) && mapTS.get(charT) !== charS)) {
      return false;
    }

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
}

// Examples

const s1 = 'egg';
const t1 = 'add';
// => true

const s2 = 'foo';
const t2 = 'bar';
// => false

const s3 = 'paper';
const t3 = 'title';
// => true

console.log(isIsomorphic(s3, t3));
