// https://www.acmicpc.net/step/2
// https://www.acmicpc.net/step/4
// poiema - javascript 15~17장 (프로퍼티 정의, 생성자 함수에 의한 객체 생성, 함수와 일급 객체)

// Q1. A+B - 5
const arr = [[1, 2], [2, 3], [3, 4], [9, 8], [5, 2], [0, 0]];
let addSum = '';

let sum = function(a, b) {
  if (a > 0 || b > 0) {
    addSum = a + b;
    console.log(`${a} + ${b} = ${addSum}`);
  }
  return;
};
for (const item of arr) {
  sum(item[0], item[1]);
}

// Q2. A+B - 4
const arr = [[1, 1], [2, 3], [3, 4], [9, 8], [5, 2]];
let sumNum = '';

let sum = arr.forEach(function(item) {
  sumNum = item[0] + item[1];
  console.log(sumNum);
});

// Q3. 더하기 사이클
// pass
