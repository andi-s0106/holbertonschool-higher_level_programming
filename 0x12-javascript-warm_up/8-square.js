#!/usr/bin/node

const x = process.argv[2];

if (isNaN(parseInt(process.argv[2]))) {
  console.log('Missing size');
} else {
  for (let h = 0; h < x; h++) {
    let p = '';
    for (let w = 0; w < x; w++) {
      p = p + 'x';
    }
    console.log(p);
  }
}
