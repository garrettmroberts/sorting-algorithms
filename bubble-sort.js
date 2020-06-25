const assert = require('assert');

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let changing = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        changing = true;
      }
    }

    if (!changing) return arr;
    
  }
  return arr;
};

assert.deepStrictEqual(bubbleSort([2, 1, 3]), [1, 2, 3]);
assert.deepStrictEqual(bubbleSort([2, 1, 3, -1, 0, 8]), [-1, 0, 1, 2, 3, 8]);
assert.deepStrictEqual(bubbleSort([]), []);
assert.deepStrictEqual(bubbleSort([1]), [1])