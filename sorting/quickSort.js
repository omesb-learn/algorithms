let array = [11, 20, 7, 6, 14, 18, 4, 17, 13, 2];

function quickSort(array) {
  if (array.length < 2) return array;
  const mid = array.splice(0, 1)[0];
  const left = [];
  const right = [];

  array.forEach((val, i) => {
    if (val < mid) {
      left.push(val);
    } else if (val > mid) {
      right.push(val);
    }
  });

  return [].concat(quickSort(left), mid, quickSort(right));
}

console.log("quick sorting", array);
console.warn("result", quickSort(array));
