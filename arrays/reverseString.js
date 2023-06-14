// my implementation

const stringToReverse = "Hi My name is Andrei"

function myReverse(str) {
  const strArray = str.split("")
  let reversedStr = ""
  for (let i = strArray.length - 1; i >= 0; i--) {
    reversedStr += strArray[i];
  }
  return reversedStr
}

// console.log(myReverse(stringToReverse));

// solution

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return "error, input is not string"
  }

  const backwards = []
  const totalItems = str.length - 1
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i])
  }

  return backwards.join("")
}

// console.log(reverse(stringToReverse));

function reverse2(str) {
  return str.split("").reverse().join("")
}

// console.log(reverse2(stringToReverse));

const reverse3 = str => [...str].reverse().join("")

console.log(reverse3(stringToReverse));