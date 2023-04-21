const arr = [1, 3, 6, 345, 85, 4325, 678, 234, 76, 9789, -54, -23, 47, 0];

function quickSort(arr) {
  let pivotIndex = Math.round(arr.length / 2);
  let pivot = arr[pivotIndex];
  const less = [];
  const greater = [];

  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) {
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
