#!/usr/bin/node
function second (array) {
  if (array.length === 2 || array.length === 3) {
    return (0);
  }

  let b = array[2];
  let sb = array[3];

  for (let i = 2; i < array.length; i++) {
    if (parseInt(array[i]) > sb && parseInt(array[i]) < b) {
      sb = array[i];
    } else if (parseInt(array[i]) > b) {
        sb = b;
        b = array[i];
    }
  }
  return (sb);
}
console.log(second(process.argv));
