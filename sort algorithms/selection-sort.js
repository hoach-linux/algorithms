function selectionSort(arr) {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];

      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

const arr = [43, 22, 6, 23, 5];

console.log(selectionSort(arr));
