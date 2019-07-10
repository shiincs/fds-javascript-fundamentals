// 2019/ 07/ 08

// ------------------ Fundamental Study ------------------

// 실행 컨텍스트

// = 식별자, 스코프, 호이스팅, 클로저 등의 동작 원리. 즉 실행이 가능한 코드를 평가하고 실행하기 위해 필요한 환경을 제공하고 코드의 실행 결과를 관리하는 영역이다.

// 1.	선언으로 생성된 모든 식별자(변수, 함수, 클래스)를 스코프로 구분하여 등록하고 상태 변화 (식별자에 바인딩된 값의 변화)를 지속적으로 관리한다
// 2.	스코프는 중첩 관계에 의해 스코프 체인을 형성한다. 즉 스코프 체인을 통해 최상위 식별자를 검색할 수 있어야 한다.
// 3.	현재 실행 중인 코드의 실행 순서를 변경할 수 있어야 하며 다시 되돌아갈 수 있어야 한다.

// 실행 가능한 코드	설명
// Global Code	클래스 내부를 제외한, 전역에 존재하는 함수(텍스트 코드)
// Function Code	클래스 내부를 제외한, 함수 내부에 존재하는 중첩 함수(텍스트 코드)
// Eval Code	Eval 함수에 인수로 전달된 텍스트 코드
// Module Code	클래스 내부를 제외한, 모듈에 존재하는 함수(텍스트 코드)

// Global Code : 전역 코드가 평가되면 전역 실행 컨텍스트가 생성되고 연결 된다.
// Function Code : 코드가 평가되고, 지역 스코프를 생성한다. 스코프는 스코프 체인의 최상위인 전역 스코프에서 시작한다.
// Eval Code : strict mode에서 자신만에 독자적 스코프를 생성한다.
// Module Code : 모듈별로 독자적인 스코프를 생성한다.

// Execution context stack
// = 생성된 실행 컨텍스트를 자료구조 형태로 관리한다.

// Stack
// = 후입 선출 (LIFO – Last in First Out) 방식의 자료 구조이다. 즉 마지막 데이터가 최신 데이터이며, 데이터 입력을 push(배열에 뒷쪽에 위치한다), 꺼내는 것을 pop(최신 데이터가 먼저 나온다)이라 한다. (실행 컨텍스트도 같은 원리로 동작)

// Queue
// = 선입 선출 (FIFO – Frist in Frist Out)방식의 자료 구조이다. 가장 먼저 넣은 데이터를 먼저 꺼내 사용한다. 즉 데이터를 넣은 순서대로 사용한다.

// Running execution context
// = 실행 컨텍스트 최상위에 존재하는 실행 컨텍스트

// Lexical Environment
// = 식별자가 선언되는 환경으로, 스코프와 식별자를 관리한다. 즉 스코프를 구분하여 값을 바인딩하고 객체 형태에 스코프를 만든다.

// LexicalEnvironment / VariableEnvironment 컴포넌트
// = 동인한 Lexical Environment를 참조 한다.

// 3 Component in Lexical Environment
// 1.	Environment Record = 스코프에 등록된 식별자에 바인딩된 값을 관리하는 저장소.
// 2.	Outer Lexical Environment Reference = 실행 컨텍스트를 생성한 실행 가능한 코드를 포함하는 상위 코드의 랙시컬 환경 => 단 방향 링크드 리스트인 스코프 체인을 구현한다.
// 3.	This Binding : 렉시컬 환경의 this에 바인딩된 객체(ThisBinding)를 나타낸다.

// 문서 객체 모델

// 	DOM
// = Document Object Model에 약자로 텍스트 파일로 만들어진 웹 문서를 브라우저 엔진이render, parsing 하여 브라우저가 이해할 수 있는 구조로 메모리에 올리는 것을 말한다.

// DOM은 HTML 문서에 대한 DOM Tree모델을 구성하고, HTML문서 내의 각 요소에 접근 수정을 할 수 있는 프로퍼티와 메소드를 제공한다. 즉 텍스트를 로드 파싱을 위해 객체를 만들고, 객체를 상하 관계를 표현할 수 있는 트리 구조를 구성한 것.

// DOM Tree는 크게 네 종류의 노드로 구성된다.
// 1.	Document Node
// 2.	Element Node
// 3.	Attribute Node
// 4.	Text Node

// CSSOM
// = CSS의 파싱 결과

// Parsing
//  = 사람이 보기 좋게 작성한 코드를 브라우저가 읽기 위해 해석하는 것

// Render  Tree
// = DOM + CSSOM을 합쳐 놓은것

// Rendering Engine
// = 웹 브라우저안에 있는 기능

// Components
// = 작동을 하는 기준으로 HTML, CSS, Javascript를 하나의 스타일로 만드는 방식

// Synchronous processing model VS Asynchronous processing model
// = 동기식 처리 모델(Synchronous processing model)은 직렬적 태스크 수행 방식이다. 태스크를 순차적으로 실행하고, 다음 작업은 수행중인 일이 끝나고 실행된다. 이때 다음 태스크는 blocking이 걸린다.
// 반대로 비동기식은 병렬적 수행 방식으로 이전 태스크가 수행중이더라도 중요도가 높은 먼저 처리한다. 비동기식도 태스크는 하나씩 처리 하지만, 동시에 처리되는 것처럼 보인다.

// Asynchronous processing model case
// = 자바스크립트에 timer function(setTimerout, setInterval), Ajax, but 순차적으로 실행되지 않아 가독성이 나쁘고, 콜백 헬을 발생시킬 수 있다.

// setTimeOut callback Function
// = 이벤트 발생시 Event Queue로 이동하고, call stack이 비워지면, call stack 으로 이동 후 실행된다.

// Single Tread
// = 하나의 실행 컨텍스트를 가지고 하나의 일만 실행 할 수 있는 방식이다.
