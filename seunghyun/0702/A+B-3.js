// const str = `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2`;

// const arr = str.split('\n').slice(1).map(item => item.split(' ').map(item => parseInt(item)))

const arr = [[1, 2], [4, 5]];

function sumTwo(a, b) {
  console.log(a + b);
}

for (let item of arr){
  sumTwo(item[0], item[1])
}