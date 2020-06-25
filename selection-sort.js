const assert = require('assert');

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowestNum = arr[i];
    let lowestIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < lowestNum) {
        lowestNum = arr[j];
        lowestIndex = j;
      };
    };

    arr[lowestIndex] = arr[i];
    arr[i] = lowestNum;
    console.log(arr);
  };

  return arr;
};

assert.deepStrictEqual(selectionSort([8, 5, 3, 1, 2]), [1, 2, 3, 5, 8]);
assert.deepStrictEqual(selectionSort([3, 2, 1]), [1, 2, 3]);
assert.deepStrictEqual(selectionSort([]), []);
assert.deepStrictEqual(selectionSort([2]), [2]);