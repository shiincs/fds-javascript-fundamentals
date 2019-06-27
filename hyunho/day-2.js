// Q1. 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  var answer = [];

  answer = s.split('');
  answer.sort().reverse();

  return answer.join('');
}

// Q2. 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  let strVal = s.split('');
  let center = Math.floor(strVal.length / 2);

  if (strVal.length % 2 !== 0) {
    return strVal[center];
  }
  return strVal.slice(center - 1, center + 1).join();
}

// ---------------- BAEKJOON ----------------

// Hello World!를 출력하시오.
function greeting() {
  let text = 'Hello World';

  return text;
}
greeting();

// We love kriii (Message print)
function text() {
  let encourage = '강한친구 대한육군';
  console.log(encourage + '!');
  return encourage + '!' + '!';
}
text();

// 등록
function printInfo() {
  let information = {
    correctQ: '123',
    userId: 'Your_ICPC_Team_Name'
  };
  console.log(information);
}
printInfo();

// A+B
function addTwo(a, b) {
  return a + b;
}
addTwo(1, 2);

// A-B
function addTwo(a, b) {
  return a - b;
}
addTwo(3, 2);

//A*B
function addTwo(a, b) {
  return a * b;
}
addTwo(1, 2);

// A/B
function addTwo(a, b) {
  return a / b;
}
addTwo(1, 3);

// 사칙연산
function operation(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
}
operation(7, 3);

// 나머지
function operation(A, B, C) {
  console.log((A + B) % C);
  console.log((A % C) + ((B % C) % C));
  console.log((A * B) % C);
  console.log((A * C * (B % C)) % C);
}
operation(5, 8, 4);

// ------------------ Fundamental Study ------------------

// 객체 리터럴

// Object?
// = 원시 타입을 제외한 함수, 배열, 정규 표현식 등 모든 것이 객체이다. 따라서 객체는property와 참조할 수 있는 동작을 의미하는 Method로 구성된 집합이다.

// Object Use
// = 여러 개의 값을 하나로 그룹화(객체)하여 하나의 값처럼 사용할 수 있다, 또한. 객체는 하나에 메모리 이름을 가진 변수에 할당할 수 있다.

// Object Value
// = 객체는 property들의 집합으로 자바스크립트에 모든 값은 property에 값으로 사용할 수 있다. 단 값이 함수일 경우 일반 함수와 구분하기 위해 Method라 부른다.

// 객체 타입 (Object / Reference Type)
// = 변경이 가능한 다양한 타입의 값들을 하나의 단위로 구성한 복합적인 자료 구조이다. (Data Structure)

// 객체 리터럴 / 객체 생성

// 클래스 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 Constructor를 호출하여 instance를 생성하는 방식으로 객체를 생성한다

// *Instance
// 생성된 객체(인스턴스)가 메모리에 저장된 것을 말한다. 클래스와 인스턴스도 객체에 포함되고, 클래스는 인스턴스(객체)를 생성하기 위한 역할을 한다.

// 객체 리터럴 방식으로 프로퍼티를 포함시켜 객체 생성과 동시에 프로퍼티도 생성이 가능하고 프로퍼티를 추가할 수도 있다.

// Property
// Property
// =  An object is a collection of properties. A property consists of a key and a value.
