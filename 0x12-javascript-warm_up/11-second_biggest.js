#!/usr/bin/node
function second (array) {
  if (array.length === 2 || array.length === 3) {
    return (0);
  }

  let b = array[2];
  let sb = array[3];

  for (let i = 2; i < array.length; i++) {
    if (array[1] > b) {
      sb = b;
      b = array[1];
    } else if (array[i] > sb && array[i] < b) {
      sb = array[i];
    }
  }
  return (sb);
}
console.log(second(process.argv));
