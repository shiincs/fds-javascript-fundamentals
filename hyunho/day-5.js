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

// ------------------ Fundamental Study ------------------

// 생성자 함수에 의한 객체 생성

// 1.	Object 생성자 함수
// = New 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 반환한다. 이후 프로퍼티와 메소드를 객체에 추가할 수 있다. 만약 일반 함수로 정의된 함수도 new 연산자와 같이 호출한다면 생성자 함수로 동작한다.

// 	Instance
// = new 연산자와 함께 호출한 객체를 인스턴스라고 한다. 생성자 함수도 객체로서 클래스가 생성한 객체를 구분하기 위해 부르는 이름이다. (인스턴스는 실제로 메모리에 저장되어 존재한다)

// <code>
// // 빈 객체 생성
// let city = new Object( );

// // 빈 객체 생성
// city.name = 'seoul';
// city.nation = 'Korea';
// city.info = function (){
//   console.log(this.name + ' is in ' + this.nation);
// }

// console.log(city)
// // => { name: 'seoul', nation: 'Korea', info: [Function] }

// Console.log(info)
// 	seoul is in Korea
// <code>

// Object 생성자 함수 이외에 String, Number, Boolean, Function, Array, Date, RegExp둥 빌트인 생성자 함수를 제공한다.

// 2.	생성자 함수
// 2.1 객체 리터럴 단점
// = 하나의 객체만 생성하기 때문에 비효율적이다.
// = 객체마다 값이 다를 수 있으나, 메소드는 동일한 값을 가진다.

// 2.2 생성자 함수 장점
// = 프로퍼티 구조가 동일한 객체를 여러개 생성할 수 있다

// this
// 객체 자신의 property 혹은 method를 참조하기 위한 자기 참조 변수이다. 즉 암묵적으로 this는 함수 객체 안에서 지역 변수처럼 사용이 가능하다. 그렇지만 this는 함수의 호출 방식에 바인딩 될 객체가 동적으로 결정이 된다.

// This는 일반적으로 method를 호출한 객체가 저장되어 있는 속성이다.

// This가 만들어지는 경우
// 1.	일반 함수에서 this => window
// 2.	중첩 함수에서 this => window
// 3.	콜백 함수에서 this => window
// 4.	생성자 함수에서 this => 생성할 인스턴스
// 5.	이벤트에서 this  => 이벤트 객체
// 6.	메소드에서 this => 메소드를 호출한 객체
// 7.	메소드 내부 중첩 함수 this => window

// 2.3내부 메소드 [[call]] 과 [[constructor]]
// [[call]]
// = 일반 함수로 호출을 할 수 있는 객체,  즉 내부 메소드 [[call]]이 호출됨

// [[constructor]]
// = 생성자 함수(new)로서 호출할 수 있는 객체, 즉 내부 메소드 [[constructor]]가 호출됨

// 함수는 객체 [[call]]을 가지고 있지만 생성자가 아닌 함수는 [[constructor]]을 구현 하지 않는다.

// <code>
// 	Function bar () {}

// 	// 일반 함수 호출 [[call]]
// 	bar();

// 	//생성자 함수 호출 [[constructor]]
// 	New bar();

// 	*super keyword
// 클래스에서 부모 클래스를 참조할 때, 부모 클래스의 생성자를 호출할 때 사용한다.

// 2.4	constructor와 non-constructor
// 함수를 생성할 때, FunctioCreate이라는 Abstract operation을 사용한다.

// *Abstract operation
// = 내부 동작을 구현한 알고리즘을 표현한 것이다. 함수가 정의될 때 호출되며
// 함수와 일급 객체

// 객체는 호출이 불가능하지만, 함수는 일급 객체로서 호출이 가능하고 함수의 고유 프러퍼티를 소유한다

// 	First-class-object condition
// 1.	무명 리터럴로 생성할 수 있다.(런타임에 생성이 가능하다 = 어디서든 자유롭게 정의할 수 있다)
// 2.	변수나 자료구조 (객체, 배열)에 저장할 수 있다 (값으로 평가 될 수 있다)
// 3.	함수나 parameter에게 전달할 수 있다.
// 4.	함수의 반환값으로 사용할 수 있다. (Argument)

// *함수형 프로그래밍이란?
// Pure function과 보조 함수의 조합을 통해 외부 상태를 변경하는 side-
// effect를 최소화하여 불변성을 지향하는 프로그래밍 패러다임.

// 		-조건문, 반복문을 제거하여 복잡성 해소
// 		-변수 사용을 억제하거나 생명주기를 최소화, 오류 최소화

// 	Property

// 	$ console.dir // 메소드를 사용하여 함수 내부 객체를 볼 수 있다.

// $ Object.getOwnPropertyDescriptor //메소드를 사용하여 Property의 Attribute를 볼 수 있다.

// $ Object. getOwnPropertyDescriptor(#FunName, ‘argument’);
// $ Object. getOwnPropertyDescriptor(#FunName, ‘caller’);
// $ Object. getOwnPropertyDescriptor(#FunName, ‘length’);
// $ Object. getOwnPropertyDescriptor(#FunName, ‘name’);
// $ Object. getOwnPropertyDescriptor(Object.prototype, ‘_ _proto_ _’);
//  // 접근자 프러퍼티
// $ Object. getOwnPropertyDescriptor(#FunName, ‘prototype’);

// 	Argument

// = 함수 호출 시 전달된 argument들의 정보를 가지고 있는 iterable한 Array-like object이다. 함수 내부에서는 변수처럼 사용될 수 있고 함수 외부에서는 사용 할 수 없다.

// <code>
// $ function sum (x, y) {
// 	Console.log(arguments);
// 	Return x + y;
// }

// Console.log(sum( )) => NaN
// Console.log(sum(1)) =>NaN
// Console.log(sum(1,2)) => 3
// Console.log(sum(1,2,3)) => 3
// <code>

// Feature
// 1.	x, y 는 함수내부에서 변수처럼 사용한다. (?)
// 2.	argument가 parameter 보다 많을 경우 나머지는 무시된다.
// 3.	초과된 argument는 프로퍼티로 암묵적으로 보관된다.

// Argument 객체의 symbol 프로퍼티
// Argument[Symbol.iterator]( ) = 순회가능한 자료구조로 만들기
// = argument객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다.
