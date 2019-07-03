const str = `1 1
2 3
3 4
9 8
5 2
0 0`

const arr = str.split('\n').slice(0).map(item => item.split(' ').map(item => parseInt(item)))

// console.log(arr);
let i = arr.length;
while ( i > 0) {
  console.log(arr[0] + arr[1]);
  i--;
}