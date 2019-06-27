# day02.

## 제어문
* 주어진 조건에 따라 코드블록을 실행하거나 반복실행할때 사용한다.
* 일반적으로 코드는 위에서 아래 방향으로 순차적으로 실행되지만 제어문을 사용하면 코드의 실행 흐름을 제어할 수 있다.

## 블록문
* 0개 이상의 문을 중괄호({})로 묶은 것
* 단독으로 사용할 수도 있으나 일반적으로는 제어문이나 함수 선언문 등에서 사용하는 것이 일반적이다.
* 문의 끝에는 세미콜론을 붙이는것이 일반적이지만 블록문의 끝에는 세미콜론을 붙이지 않는다.

## 조건문
* 주어진 조건식의 평가 결과에 따라 코드 블럭의 실행을 결정한다.
* if ... else 문과 switch 문을 제공한다

#### if ... else 문
* 주어진 조건식(true 또는 false로 평가되는 표현식)의 평가 결과에 따라 실행할 코드 블록을 결정한다.
```
if (조건식) {
  // 조건식이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식이 거짓이면 이 코드 블록이 실행된다.
}
```
* 대부분은 if...else문은 삼항 조건 연산자로 쓸 수 있다.
```
// x가 짝수이면 문자열 '짝수'를 반환하고 홀수이면 문자열 '홀수'를 반환한다.
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이고 0은 false로 취급된다
  result = '홀수';
} else {
  result = '짝수';
}

console.log(result); // 짝수

// 위의 예제를 삼항 조건으로 쓸 경우
var result = x % 2 ? '홀수' : '짝수';


// 세가지 경우의 수 (양수,음수,영)을 갖는 경우

var num = 2;
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind); // 양수
```

#### switch문
* 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case문으로 실행 순서를 이동시킨다. 
* if ... else문의 조건식은 반드시 불리언값으로 평가되지만, switch문의 표현식은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할때 사용한다.

## 반복문
* 주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행한다. 그후 조건식을 다시 검사하여 여전히 참인 경우 코드블록을 다시 실행한다. 거짓이 될 때까지 반복한다.

#### for문
* 조건식이 거짓으로 판별될 때까지 코드블록을 반복 실행한다. 
```
for (변수 선언문 또는 할당문; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
for (var i = 0; i < 2; i++) {
  console.log(i);
}

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
```
#### while 문
* while문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. 조건문의 평가 결과가 거짓이 되면 실행을 종료한다.
* 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환되어 논리적 참, 거짓을 구별한다.
```
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2
```

#### break문
* switch 문과 while문에서 살펴보았듯이 break문은 코드 블록을 탈출한다. 
```
// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log('inner ' + j);
  }
}

console.log('Done!');
```

#### continue 문
* 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동한다. break 문처럼 반복문을 탈출하지는 않는다.

<hr>

## 타입변환과 단축평가

#### 타입변환이란?
* 자바스크립트의 모든 값은 타입이 있다.
* 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입변환 이라고 한다.
* 자바스크립트는 동적타입언어이기 때문에 개발자의 의도와 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환하기도 하는데, 이를 암묵적 타입변환 또는 타입 강제 변환이라고 한다.

#### 암묵적 타입 변환
* 자바스크립트엔진은 표현식을 평가할 때 코드의 문맥을 고려하여 암묵적 타입 변환을 실행한다.
```
// 피연산자가 모두 문자열 타입이여야 하는 문맥
'10' + 2  // '102'

// 피연산자가 모두 숫자 타입이여야 하는 문맥
5 * '10'  // 50

// 피연산자 또는 표현식이 불리언 타입이여야 하는 문맥
!0 // true
if (1) { }
```
* 자바스크립트엔진은 가급적 에러를 발생시키지 않기 위해 암묵적 타입변환을 통해 표현식을 평가한다.
* 암묵적 타입 변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환한다. 

#### 문자열 타입으로 변환
* 자바스크립트엔진은 문자열 연결 연산자를 통해서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입변환한다.
```
1 + '2' // "12"
console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
```

#### 불리언 타입으로 변환
* if문이나 for문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언값(논리적 참,거짓)을 반환해야 하는 표현식이다.
* 자바스크립트엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 인식할 값) 또는 Falsy 값(거짓으로 인식할 값)으로 구분한다.

#### 명시적 타입 변환
* 래퍼 객체 생성자함수를 new연산자 없이 호출하는 방법, 자바스크립트에서 제공하는 빌트인 메소드를 사용하는 방법, 암묵적 타입변환을 이용하는 방법이 있다.
```
var x = 10;

// 숫자를 문자열로 타입 캐스팅한다.
// x는 숫자 타입의 원시 값이지만 객체처럼 동작한다.
var str = x.toString();

console.log(str); // "10"

console.log((1).toString());
```

#### 문자열 타입으로 변환
* String 생성자 함수를 new연산자 없이 호출하는 방법
* Object.prototype.toString 메소드를 사용하는 방법
* 문자열 연결 연산자를 이용하는 방법
```
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
console.log(String(1)); 

// 2. Object.prototype.toString 메소드를 사용하는 방법
console.log((1).toString()); 

// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 타입 => 문자열 타입
console.log(1 + '');
```

#### 숫자 타입으로 변환
* Number 생성자 함수를 new연산자 없이 호출하는 방법
* parseInt, parseFloat 함수를 사용하는 방법 (문자열만  변환가능)
* +단항 연결 연산자를 이용하는 방법
* *산술 연산자를 이용하는 방법
```
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
console.log(Number('0'));     // 0

// 문자열 타입 => 숫자 타입
console.log(parseInt('0'));  // 0

// 3. + 단항 연결 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log(+'0');     // 0

// 4. * 산술 연산자를 이용하는 방법
// 문자열 타입 => 숫자 타입
console.log('0' * 1);     // 0
```

#### 불리언 타입으로 변환
* Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
* !부정 논리 연산자를 두번 사용하는 방법
```
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 => 불리언 타입
console.log(Boolean('x'));       // true

// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 타입 => 불리언 타입
console.log(!!'x');       // true
// 객체 타입 => 불리언 타입
console.log(!!{});        // true
```

#### 단축평가
* 논리합(||) 연산자와 논리곱(&&) 연산자의 연산결과는 불리언 값이 아닐 수 있다.
* 논리곱 연산자(&&)와 논리합 연산자(||)는 논리 평가를 결정한 피연산자를 그대로 반환한다. 이를 단축 평가(Short-Circuit evaluation)라 부른다. 

1. 논리곱(&&)
```
'Cat' && 'Dog' // 'Dog'
```
* 논리곱 연산자(&&)는 두개의 피연산자 모두 true일때 true를 반환함.
* 논리곱 연산자 &&는 논리 연산의 결과를 결정한 두번째 피연산자 즉, 문자열 ‘Dog’를 그대로 반환한다.

2. 논리합(||)
```
'Cat' || 'Dog' // 'Cat'
```
* 논리합 연산자(||)는 두개의 피연산자 중 하나만 true로 평가되도 true를 반환한다.
* 논리합 연산자 ||는 논리 연산의 결과를 결정한 첫번째 피연산자 즉, 문자열 ‘Cat’를 그대로 반환한다.

<table>
  <tr>
    <th>단축 평가 표현식</th>
    <th>평가 결과</th>
  </tr>
  <tr>
    <td>true || anything<td>
    <td>true<td>
  </tr>
  <tr>
    <td>false || anything<td>
    <td>anything<td>
  </tr>
  <tr>
    <td>true && anything<td>
    <td>anything<td>
  </tr>
  <tr>
    <td>false && anything<td>
    <td>false<td>
  </tr>
</table>

```
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
```


# 연습문제
```
// 1번 Hello World!를 출력하시오.
function hello(){
  console.log('Hello World!')
}
hello()

// 2번 두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다.
function korea(){
  console.log('강한친구 대한육군 \n강한친구 대한육군' )
  console.log(`강한친구 대한육군
  강한친구 대한육군`)
}
korea()

// 3번
function id(){
  console.log(`
  123
  Your_ICPC_Team_Name
  `)
}
id()

// 4번 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
function sum(a,b){
  return a+b
}
sum(1,2)

// 5번 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
function subtract(a,b){
  return a-b
}
subtract(3,2)

// 6번 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.
function multiply(a,b){
  return a*b
}
multiply(1,2)

// 7번 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
function divide(a,b){
  return a/b
}
divide(1,3)

// 8번 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오
function arithmetic(a,b){
  console.log(a+b, a-b, a*b, a/b, a%b)
}
arithmetic(7,3)

// 9번 
function compare(a,b,c){
  console.log((a+b)%c);
  console.log((a%c+b%c)%c);
  console.log((a*b)%c);
  console.log((a%c*b%c)%c)
}
compare(5,8,4)

// 10번 
function multiplication(a,b){
  console.log(a*5);
  console.log(a*8);
  console.log(a*3);
  console.log((a*5)+((a*80))+(a*300))
}
multiplication(472,385)
```