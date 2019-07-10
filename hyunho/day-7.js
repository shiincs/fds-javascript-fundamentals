// ------------------ Fundamental Study ------------------

// This

// = 자신이 속한 객체에 프로퍼티나 메소드를 참조하기 위한Self-referencing variable 이다.

// = 생성자 함수를 호출하면 argument, this가 전달되고, 지역 변수처럼 사용할 수 있다. 그렇지만 this에 값은 함수 호출 방식에 따라 동적으로 결정된다.

// = 객체 리터럴 방식으로 생성된 객체는 메소드 내부에서 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조할 수 있다.

// 함수 호출방식과 This 바인딩
// Binding
// = 식별자와 값을 연결하는 과정을 의미한다. this에 바인딩될 객체는 함수 호출 방식에 따라 동적으로 결정된다.

// = this에 바인딩될 객체의 lexical scope는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다.

// 호출 방식과 this의 값
// 1.	일반 함수에서 this => window (Global Object)
// 2.	중첩 함수에서 this => window (Global Object)
// 3.	콜백 함수에서 this => window (Global Object)
// 4.	메소드 내부 중첩 함수 this => window (Global Object)
// 5.	메소드에서 this => 메소드를 호출한 객체 (#object.function())
// 6.	생성자 함수 호출 => 생성될 인스턴스
// 7.	이벤트에서 this => 이벤트 객체
// 8.	Function.Prototype.apply/call/bind(argument) 메소드에 의한 간접 호출 => Argument에 의해 결정된다

// 메소드 this와 바인딩 시키기
// <code>
// Const foo = {
// 	City: ‘Seoul’,
// 	Bar () {
// 		Const thisVal = this;
// 		SetTimeout(function(){
// 			Console.log(thisVal.value); // => Seoul
// }, 100);
// }
// };
// <code>

//
// Array

// = 1 개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다.

// 배열 리터럴
// = 쉼표로 구분하여 대괄호( [ ] )로 묶는다.

// = 프로퍼티 명이 없고 각 요소의 값만이 존재한다.

// = 배열에 요소에 접근하기 위해서 요소의 인덱스를 넣어줄 수 있다.

// = 배열 안에는 다양한 데이터 값을 같이 넣을 수 있다.

// <code>
// Const arr = [ ‘0’: ‘zero’, ‘1’:’one’, ‘2’,:’two’]
// <code>

// new Array()
// = array.prototype.constructor 프러퍼티로 접근할 수 있다.

// = parameter의 개수에 따라 다르게 동작한다
// -	New array(2) => length 값으로 배열을 생성
// -	New array(x, y, z) => parameter에 요소를 가진 배열 생성

// 배열 요소 추가
// = 요소는 순서에 상관없이 배열에 동적으로 추가할 수 있고, length는 마지막 인덱스 기준으로 평가된다.

// 배열 요소 삭제
// = deleta #arrName[index] 를 통해 요소를 삭제할 수 있다. 단, 삭제된 요소는 ‘empty’ 로 표시되고 length값는 변하지 않는다.

// = array.prototypr.splice를 사용해 length와 요소를 삭제할 수 있다.

// 배열의 순회
// <code>
// Const arr = [0,1,2,3]

// For (const key in arr){
// 	Console.log(‘key: ’ +key, ‘value: ’ +arr[key])
// }

// For (const item of arr){
// 	Console.log(item)
// }

// Arr.forEach((item, index) => console.log(index, item))

// For (let i = 0; i < arr.length; i++){
// 	Console.log(I, arr[i])
// }
// <code>

// Array property
// Array.length
// = 요소의 개수(배열의 길이)를 나타낸다.

// = length값은 명시적으로 변경할  수 있다. 변경시 length값에 이후 요소는 삭제된다.

// Array Method
// Array.isArray(argument): Boolean
// = 객체가 배열이면 ture, 아니면 false

// Array.from(arraylike[, mapFunction[, thisArgument]])
// = 이터러블 배열로 반환한다.

// Array.of(element0 [, element1 [, elementNum…]])
// = 주어진 argument로 새로운 배열은 생성한다.

// Array.prototype.indexOf( )

// Array.prototype.concat( )
// = 원본에서 복사

// Array.prototype.join( )
// = 원본에서 복사
// = 배열을 문자로 만들고 싶을 때

// Array.prototype.pop( )
// = 원본 홰손

// Array.prototype.push( )
// = 원본 홰손

// Array.prototype.reverse( )
// = 원본 홰손
// = 요소 순서를 뒤집는다.

// Array.prototype.shift( )

// Array.prototype.slice( )
// = 원본에서 복사

// Array.prototype.splice( )
// = 원본 홰손
// = a부터 b까지 c,d,e... 으로 채운다.
// = Arr.splice(1,3, o, o, o) // a~b까지 없애준다 or o로 채워준다

// Higher Order Function

// 	Array.prototype.sort( )
// = 원본 홰손
// 	= 정해진 규칙대로 정렬

// Array.prototype.forEach( )

// Array.prototype.map( )
// = 원본에서 복사
// = 배열을 복사한 후 요소 내용을 변경해서 반환하는 메소드.  콜백 함수가 반환한 값이 요소가 된다.

// Array.prototype.filter( )
// = 원본에서 복사
// = 배열을 복사한 뒤 조건에 맞는 요소만 추려서 반환하는 메소드. 콜백 함수가 반환한 것이 true이면 남고, false면 사라진다.

// Array.prototype.reduce( )
// = 원본에서 복사
// = 배열을 복사한 뒤 새로운 값을 반환합니다. 새로운 값이 배열이 아닐 수도 있음.

// Array.prototype.some( )
// = 원본에서 복사
// = 콜백이 반환한 값이 하나라도 true이면 true 반환

// Array.prototype.every( )
// = 원본에서 복사
// = 콜백이 반환한 값이 모두 true이면 true 반환

// Array.prototype.find( )
// = 원본에서 복사
// = 콜백함수가 반환한 값이 true인 요소를 반환

// Array.prototype.findIndex( )
// = 원본에서 복사
// = 콜백이 반환한 값이 true인 (순서의) 요소의 인덱스 반환
