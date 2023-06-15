// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30, 31]


// function myMergeSortedArrays(arr1, arr2) {
//   const mergedArrays = [...arr1, ...arr2]
//   const sortedMergedArrays = mergedArrays.sort((a, b) => a - b);
//   return sortedMergedArrays;
// }

const myMergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b)

// console.log(myMergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1

  // check input
  if (array1.length === 0) {
    return array2
  }
  if (array2.length === 0) {
    return array1
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i]
      i++
    } else {
      mergedArray.push(array2Item)
    }
  }

  return mergedArray
}