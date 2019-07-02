// Q1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.
var x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

// Q2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.\
let stringNum = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    stringNum += i;
  }
}
console.log(stringNum);

// Q4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 10; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Q5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let i = 0;
while (i < 9) {
  i++;
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let i = 10;
while (i > 0) {
  i--;
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Q7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let totalSum = 0;
for (let i = 0; i < 10; i++) {
  totalSum += i;
}
console.log(totalSum);

// Q8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let totalAdd = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    // return
  } else if (i % 3 === 0) {
    // return
  } else {
    totalAdd += i;
  }
}
console.log(totalAdd);

// Q9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let totalAdd = 0;

for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    totalAdd += i;
  } else if (i % 3 === 0) {
    totalAdd += i;
  } else {
    console.log(i);
  }
}
console.log(totalAdd);

// Q10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

// ------------------ Fundamental Study ------------------

// 원시 값과 객체의 비교

// 	원시 타입
// = Immutable Value로 변경이 불가능한 값, 단 상수와는 다른 개념으로 새로운 메모리 공간에 같은 값 혹은 재 할당 값을 저장한다.

// 	객체 타입
// 	= Mutable Value로 변경이 상시 가능한 값

// Pass by Value (값에 의한 전달)
// = 원시 값을 갖는 변수를 재 할당 할 때 (다른 변수로) 원본에 값이 복사되어  전달된다. (원본 값을 수정해도 복사 값은 변경되지 않는다)

// Pass by Reference (참조에 의한 전달)
// = 객체 값을 갖는 변수를 재 할당 할 때 원본에 참조 값이 복사되어 전달된다.

// 	+ 자바스크립트에서는 문자열은 원시타입으로 작동한다.

// -	Array-like Object
// 배열은 아니지만 배열처럼 Iterable이 가능한 객체.
// 인덱스를 통해 각 문자로 접근이 가능하고, for문으로 순회가 가능하다.
// 문자열도 length을 가질 수 있다.

// 	객체 관리 방식

// 	Dictionary-like Structure
// = 클래스 없이 객체를 생성하고, 생성 후 동적으로 프로퍼티와 메소드를 추가할 수 있다. 즉 자바스크립트 엔진은 hidden class 방식을 사용한다. 이는 고정된 레이아웃과 유사하게 동작한다.

// Pass by Value (변경 가능한 값 = 참조 값)

// 변수에 객체 타입 형태의 데이터를 할당하면, 변수는 객체를 저장한 메모리에 참조 값을 가진다.

// Shallow Copy
// 	= Reference value copy

// 	Deep Copy
// 	= 원시 값처럼 객체 자체를 복사하여 다시 생성하는 것

// 	객체의 구조적 단점
// = 원시 값과 다르게 여러 개의 식별자가 하나의 객체를 공유 할 수 있는 Side Effect가 발생한다.

// 1.	참조에 의한 전달 (Pass by reference)로 참조 값이 복사된다(Shallow Copy)
// 2.	두개 이상에 참조 값이 있다면, 한쪽에서 객체의 정보를 수정하면, 참조하고 있는 변수는 동시에 바뀐 값을 참조한다.

// Function

// = Scope, Execution context, Closure, Creating an object through a constructor function, Method, This, Prototype, Modularization are closely connected with function.

// 즉, 함수는 입력을 전달 받는 Parameter, 입력을 하는 Argument, 결과를 출력 하는 Return Value를 일련의 과정을 문(Statement)들로 구현하고 코드 블록으로 감싼 하나의 단위로 정의한 것 이다.

// 1.	함수 정의를 통해 생성한다.
// 2.	Function call / invoke를 통해 실행을 해주어야 한다.
// 3.	코드의 재사용을 목적으로 갖는다.
// 4.	유지 보수와 편의성을 높어준다.
// 5.	코드에 가독성을 위해 이름은 역할을 잘 설명할 수 있어야 한다.

// -	함수 리터럴 방식 = 함수도 리터럴로 평가 된다
// Var sum = function sum (x, y){
// 	Return x + y;
// }
//
// -	함수정의 방식
// o	Function Declaration /Function Statement
// 	Function add (x, y){
// Return x + y;
// }

// 1.	함수명을 생략할 수 없다.
// 2.	함수명은 함수 내부에서만 참조할 수 있다.
// 3.	함수 객체를 할당할 변수를 필요로 한다. (객체를 참조할 수 있는 변수가 필요하다)
// 4.	함수명을 가르치는 변수명으로 함수를 호출한다.
// 5.	Not Expression Statement 이다.

// o	Function Expression
// 	Var add = function (x, y){
// Return x + y;
// }
// 1.	일급객체로서 값을 자유롭게 사용할 수 있다.
// 2.	함수를 변수에 할당한 것을 표현식이라 한다.
// 3.	함수명을 생략할 수 있다. (Anonymous Function)
// 4.	Expression Statement 이다.

// o	Function Constructor
// 	Var add = new Function (‘x’ ,’y’, ‘return x + y’);
// o	Arrow Function
// 	Var add = (x, y) => x + y;
