# day01. 개념정리

## 프로그래밍이란?

### Computational thinking 

* 프로그래밍은 수행되기 원하는 명령을 컴퓨터에 전달하는 일종의 커뮤니케이션이다.
* 컴퓨터에게 명령을 할때는 소리를 크게 키워라 가 아닌, 현재 볼륨보다 1단계 크게 조정하라 처럼 컴퓨터의 관점으로 명령해야한다.

### 프로그래밍언어 
* 기계어로 명령을 전달하기 위해 약속된 구문(문법)으로 구성된 프로그래밍언어를 사용하여 프로그램을 작성후 컴퓨터가 이해할 수 있는 기계어로 환하여 전달한다. 
* 컴퓨터가 이해할 수 있는 언어로 전달하는 일종의 번역기 역할을 컴파일러(compiler)혹은 인터프리터(interpreter)라고 한다. 


## 문제풀이
```
// 1번 문제. 문자열을 정수로 바꾸기 
function solution(s) {
    var answer = s;
    return parseInt(answer)
}
// 2번 문제. 약수의 합
function solution(n) {
    var answer = 0;
    for(var i = 0; i <= n; i++)
        if(n % i === 0){
            answer += i
        }
    return answer;
}

// 3번 문제. 짝수와 홀수 
function solution(num) {
    var answer = num;
    if(answer % 2){
        return 'Odd'
    }else{
        return 'Even'
    }
    return ;
}
```