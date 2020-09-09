let arr = [5, 2, 3, 1, 7, 4, 8, 4, 2];

function insertionSort(ar) {
  let result = [];

  ar.forEach((el) => {
    let done;
    result.forEach((val, i) => {
      if (!done && el > val) {
        result.splice(i, 0, el);
        done = true;
      }
    });
    if (result.length == 0) result.push(el);
  });

  return result;
}

console.log(insertionSort(arr));

// TODO: wtf
