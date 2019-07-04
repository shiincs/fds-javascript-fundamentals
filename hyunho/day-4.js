// https://www.acmicpc.net/step/3
// poiema - javascript 12~14장 (스코프, 전역변수의 문제점, let/const와 블록 레벨스코프)

// Q1. 구구단
let gugu = '';
let n = '';
if (n >= 1 || n <= 9) {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      gugu = i * j;
      console.log(`${i}*${j}`, gugu);
    }
  }
}

// Q2. A+B - 3
let totalAdd = '';

let addNum = function(a, b) {
  if (a < 10 && b < 10) {
    totalAdd = a + b;
  } else return console.log('Error');
  console.log(`${a}+${b}=${totalAdd}`);
};
addNum(1, 1);
addNum(2, 3);
addNum(3, 4);
addNum(9, 8);
addNum(5, 2);

// Q3. 합
let n = 3;
let sumTotal = 0;

for (let i = 0; i <= n; i++) {
  sumTotal += i;
}
console.log(sumTotal);

// Q4. 빠른 A+B
const arr = [[1, 1], [12, 34], [5, 500], [40, 60], [1000, 1000]];

let totalAdd = '';

let addNum = function(a, b) {
  totalAdd = a + b;
  console.log(`${a}+${b}=${totalAdd}`);
};

for (const item of arr) {
  addNum(item[0], item[1]);
}

// Q5. N 찍기
let n = 5;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// Q6 기찍 N
let n = 5;

for (let i = n; i > 0; i--) {
  console.log(i);
}

// Q7 A+B - 7

// ------------------ Fundamental Study ------------------
