let array = [11, 20, 7, 6, 14, 18, 4, 17, 13, 2];

function selectionSort(array) {
  const ar = [...array];
  const sorted = [];

  while (ar.length > 0) {
    let min = ar.splice(minIndex(ar), 1);
    sorted.push(min[0]);
  }

  console.log("selection sorting", array);
  console.log("output", sorted, "\n");
}

function minIndex(ar) {
  let idx = 0;

  ar.forEach((val, i) => {
    if (val < ar[idx]) idx = i;
  });

  //   console.log(ar, "-", ar[idx]);
  return idx;
}

selectionSort(array);
