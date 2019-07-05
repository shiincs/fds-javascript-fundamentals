// ------------------ Fundamental Study ------------------

// Global Object
// = 최상위 객체로 가장 먼저 생성된다.
// = 전역 객체의 의미
// o	클라이언트 사이드 => 브라우저
// o	서버 사이드 => Node.js
// = 전역 객체의 특징
// -	개발자가 의도적으로 생성할 수 없다.
// -	프러퍼티를 참조할 때 window를 생략할 수 있다.
// -	Object, String, Boolean, Function, Array, RegExp, Date, Math, Promise 빌트인 객체를 프로퍼티로 가지고 있다.
// -	Window(브라우저) 객체는 DOM, BOM, Canvas, XMLHttpRequest, Fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker같은 클라이언트 사이드 Web API를 소유한다.
// -	Var 변수, 선언하지 않고 할당된 값, 전역 함수는 전역 객체의 프러퍼티가 된다.

// Global Property
// = 애플리케이션 전역에서 사용하는 값들을 나타내고 전역 객체의 property를 의미한다.

// Infinity
// = 양/음 무한대를 나타내는 숫자값

// NaN
// = 숫자가 아님을 나타내는 숫자값 (= Number.NaN)

// Undefined
// = 원시 타입값

// Global Function
// = 전역 객체의 메소드로 전역에서 호출이 가능한 함수

// Eval
// = Parameter에 전달된 표현식, 문을 나타내는 문자열을 평가(실행)후 결과값 반환.
// = Run-time에Scope를 수정한다
// = Strict Mode에서 eval 함수는 자신만에 독자적인 스코프를 생성한다.
// = let, const를 사용하면 Strict Mode로 동작한다.
// = untrusted data

// IsFinite
// = 매개 변수에 전달된 값이 정상적인 유한수인지 검사하고, 불리언 타입으로 반환한다. 만약 parameter가 숫자가 아니면 숫자로 변환 후 평가한다.
// (Null, true, false, ‘10’ 숫자로 변환후 평가)

// IsNaN
// = 숫자가 아닌 값인지 평가한다. 숫자 값이 아니라면 숫자로 변환하여 검사한다
// (숫자자가 아니면 => ture / 숫자라면 => false)

// ParseFloat
// = 문자열을 floating point number로 변환하여 반환.

// ParseInt
// = 문자열을 정수형 integer로 해석하여 반환한다. (값은 언제나 10진수이다) 만약 문자열이 아니라면 문자열로 변환 후 평가

// toString
// = 문자열로 변환하여 반환한다
