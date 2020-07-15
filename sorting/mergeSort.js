let array = [11, 20, 7, 6, 14, 18, 4, 17, 13, 2];

function mergeSort(array) {
  if (array.length == 1) return array;

  const mid = Math.floor(array.length - 1);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    const merged = [];

    while (true) {
      if (left.length == 0) return merged.concat(right);
      if (right.length == 0) return merged.concat(left);
      if (left[0] <= right[0]) {
        merged.push(left.splice(0, 1)[0]);
      } else {
        merged.push(right.splice(0, 1)[0]);
      }
    }
  }
}

console.log("merge sorting", array);
console.log("output", mergeSort(array), "\n");
