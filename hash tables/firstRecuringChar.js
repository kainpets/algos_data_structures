// given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// given an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// given an array = [2,3,4,5]
// it should return undefined

// const myFirstRecuringChar = (arr) => {
//   let recuringNum = 0;
//   const sortedArr = arr.sort((a, b) => a - b);

//   for (num of sortedArr) {
//     if (num[i] + num[i+1])
//   }
// };

function firstRecuringChar(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n**2)

function firstRecuringChar2(input) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // O(n) 

console.log(firstRecuringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecuringChar2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecuringChar2([2, 3, 4, 5]));
