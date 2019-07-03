// const str = `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2`;

// const arr = str.split('\n').slice(1).map(item => item.split(' ').map(item => parseInt(item)))

const arr = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6];

let answer = ''
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  if (arr[i] < 7) {
    answer += arr[i] + ' ';
  }
}
console.log(answer);
