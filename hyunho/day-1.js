// Q1. 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(s) {
  var answer = parseInt(s);
  return answer;
}



// Q2. 자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  var answer = 0;
      for (let i = 1; i <= n; i++){
          if (n % i === 0){
              answer += i
          }
      }
  return answer;
}

// Q3. 정수 num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환하는 함수, solution을 완성해주세요.

function solution(num) {
  var answer = num % 2 === 0 ? "Even" : "Odd";
  return answer;
}

// Q4. 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  var answer = 0;
  for(let i = 0; i < arr.length; i++){
      answer += arr[i]
  }
  return answer / arr.length;
}