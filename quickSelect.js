let array = [11, 20, 7, 6, 14, 18, 4, 17, 13, 2];

function quickSelect(array, k) {
  if (array.length == 0 || array.length < k) return;
  const arr = [...array];
  const mid = arr.splice(0, 1);
  const left = [];
  const right = [];

  arr.forEach((val, i) => {
    if (val < mid) {
      left.push(val);
    } else if (val > mid) {
      right.push(val);
    }
  });

  if (left.length >= k) return quickSelect(left, k);
  if (left.length + 1 == k) return mid[0];
  return quickSelect(right, k - (left.length + mid.length));
}

// console.log(quickSelect(array, 6));
array.forEach((val, i) => {
  console.log("k =", i + 1, ":", quickSelect(array, i + 1));
});
