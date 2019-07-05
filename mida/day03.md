# day03.

## 원시값과 객체의 비교
* 자바스크립트에서 제공하는 7가지 데이터타입에는 크게 원시타입과 객체타입으로 구분할 수 있다.
* 원시타입은 변경불가능한 값(immutable value)이다. 객체타입의 값은 변경가능한 값(mutable value)이다.
* 원시값을 변수에 할당하면 변수에는 실제 값이 저장되고 객체를 변수에 할당하면 변수에는 참조값이 저장된다.
* 원시값을 갖는 변수를 다른 변수에 할당하면 원본의 원시값이 복사되어 전달되는데 이를 값에 의한 전달(Pass by value)라 한다. 
* 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달되는데 이를 참조에 의한 전달(Pass by reference)라 한다.


### 원시값
* 원시타입의 값은 변경불가능한 값(immutable value)이다. 한번 생성된 원시값은 read only한 값이므로 변경할 수 없다.
* 원시값을 갖는 변수에 새로운 원시값을 재할당하면 변수는 원래 값을 수정하는 것이 아니라 새로운 메모리 공간을 확보하고 재할당한 원시값을 저장하기 때문에 참조하던 메모리 공간의 주소가 바뀌게 된다. 이러한 특성을 불변성(immutability)라 한다.

#### 문자열과 불변성
* 자바스크립트의 문자열은 원시타입이며 변경불가능하다. 
* 문자열은 유사배열이므로 배열과 유사하게 각 문자에 접근할 수 있다. (문자열은 유사배열이므로 인덱스를 사용하여 각 문자에 접근할 수 있다.)
* 문자열은 원시타입인 값으므로 변경할 수 없으며 이때 에러가 발생하지 않는다.

#### 값에 의한 전달
```
var foo = 10;
var bar = foo;

foo = 100;
console.log(bar); // ?
```
* 위의 예제처럼 변수에 변수를 할당했을때 무엇이 어떻게 전달되는가에 대한 질문의 답은 할당한 변수가 원시타입이라면 할당한 변수값이 복사되어 전달된다. 이를 값에 의한 전달 (Pass by value)라 한다.
* 위의 예제의 경우 변수 bar에 변수 foo를 할당하면 변수 foo의 값이 복사되어 변수 bar에 할당된다.

### 객체
* 객체는 프로퍼티의 개수가 정해져 있지 않으며 동적으로 추가되고 삭제할 수 있다.
* 자바스크립트는 클래스 없이 객체를 생성할 수 있으며 객체가 생성된 이후라도 동적으로 프로퍼티와 메소드를 추가할 수 있다.
* 자바스크립트 엔진은 객체의 프로퍼티 값의 위치를 메모리에 저장하기 위해 해시 함수 기반의 유사 딕셔너리구조(dictionary-like structure)를 사용한다.

#### 변경 가능한 값
* 객체는 변경가능한 값(mutable value)이다.
* 객체를 할당한 변수는 참조값(Reference value)을 값으로 갖는다.
* 변수가 가리키는 객체는 생성된 이후에도 프로퍼티를 동적으로 추가할 수도 있고, 프로퍼티 값을 갱신할 수도 있으며 프로퍼티 자체를 삭제할 수도 있다. ( 변경할수 있는 값이기 때문에 )
* 객체는 변경 가능한 값이므로 메모리에 저장된 객체를 직접 수정할 수 있는데 이때 참조값은 변경되지 않는다.
* 객체의 부작용은 원시값과는 다르게 여러개의 식별자가 하나의 객체를 공유할 수 있다는 점이다.

> 얕은 복사와 깊은복사<br>
> 참조값을 복사하는 것을 얕은 복사(shallow copy), 원시값처럼 객체 자체를 복사하여 다시 생성하는 것을 깊은 복사(deep copy)라 한다.

#### 참조에 의한 전달
* 객체의 부작용으로 여러개의 식별자가 하나의 객체를 공유할수 있다는 것은 원본 또는 사본 중 어떤 한쪽에서 객체를 변경하면 서로 영향을 주고 받는 다는 점이다.
```
var person = {
  name: 'Lee'
};

// 참조 값을 복사. copy와 person은 동일한 객체를 참조한다.
var copy = person;

// copy와 person은 같은 참조 값을 갖는다.
console.log(copy === person); // true

// copy를 통해 객체를 변경한다.
copy.name = 'Kim';

// person을 통해 객체를 변경한다.
person.address = 'Seoul';

// copy와 person은 같은 동일한 가리키고 있다.
// 따라서 어느 한쪽에서 객체를 변경하면 서로 영향을 주고 받는다.
console.log(person); // {name: "Kim", address: "Seoul"}
console.log(copy);   // {name: "Kim", address: "Seoul"}
```
```
var person1 = {
  name: 'Lee'
};

var person2 = {
  name: 'Lee'
};

console.log(person1 === person2); // ① 서로 다른 객체 

console.log(person1.name === person2.name); // ② true - 값을 비교했을때 string 이기 때문에 true
```

<hr>

## 함수
* 자바스크립트에서 가장 중요한 핵심 개념중 하나이다.
* 함수는 코드의 재사용 과 유지보수의 편의성을 높이기 위해사용한다.
* 입력을 전달받는 변수를 매개변수(parameter), 입력값을 인수(argument), 출력을 반환값(return value)라 한다.
* 함수는 함수정의만으로는 실행되지 않기 때문에 함수를 호출해야 한다.
* 함수는 함수리터럴로 생성하는데 함수 리터럴은 function 키워드, 함수명, 매개변수 목록, 함수 몸체로 구성된다.
* 자바스크립트의 함수는 객체이며, 이는 다른 프로그래밍언어와 구별되는 자바스크립트의 중요한 특징이다.
* 함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다. 또한 일반객체에는 없는 함수 객체만의 고유한 프로퍼티를 갖는다.
* 함수정의는 함수 선언문, 함수 표현식, Function 생성자함수, 화살표 함수가 있다.









## 제어문 연습문제
1. 변수 x가 10보다 크고 20보다 작을때 변수 x를 출력하는 조건식을 완성하라.
```
const x = 15;
if(x > 10 && x < 20){
  console.log(x)
}
```
2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
```
for(var i = 0; i < 10; i++){
  if(i % 2 === 0){
    console.log(i)
  }
}
```
3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
```
var even = '';
for(var i = 0; i < 10; i++){
  if(i % 2 === 0){
    even += i;
  }
}
console.log(even)
```
4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
```
for(var i = 10; i > 0; i--){
  if(i % 2 === 1){
    console.log(i)
  }
}
```
5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
```
var num = 0;
while(num < 10){
  console.log(num);
  num += 2;
}
```
6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
```
var num = 9;
while(num > 1){
  console.log(num);
  num -= 2;
}
```
7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
```
sum = 0;
for(var i = 0; i < 10; i++){
  sum += i;
}
console.log(sum)
```
8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
```
var sum = 0;
for(var i = 1; i < 20; i++){
  if(i % 2 !== 0 && i % 3 !== 0){
    sum += i;
  }
}
console.log(sum)
```
9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
```
var sum = 0;
for(var i = 1; i < 20; i++){
  if(i % 2 === 0 || i % 3 === 0){
    sum += i;
  }
}
console.log(sum)
```
10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
```
var sum = [];
for(var i = 1; i <= 6; i++){
  for(var j = 1; j <= 6; j++){
    if(i + j == 6){
      sum = [i,j];
      console.log(sum)
    }
  }
}
```
11.  삼각형 출력하기 - pattern 1
```
var star = '';
for(var i = 1; i <= 5; i++){
  for(var j = i; j <= i; j++){
    star += '*';
    console.log(star)
  }
}
```
12. 삼각형 출력하기 - pattern 2
```
```

13. 
```

for(var i = 5; i >= 1; i--){
  var star = '';
  for(var j = i; j >= 1; j--){
    star += '*';
  }
  console.log(star)
}


```

## 12, 14, 15, 16은 아직 이해부족으로 못풀었습니다. 마저 풀 예정이에요 