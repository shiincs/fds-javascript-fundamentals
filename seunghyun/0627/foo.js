let s = "BACZbcdefg";
function solution (s) {
  // 문자열정렬 sort()?, 영문 대소문자, 대문자는 소문자 보다 작은 것 간주.
  // for 문으로 문자열? split, sort
  // sort((a,b)=>a-b)
  // 대소문자 비교를 한 뒤 대문자를 뒤에 정렬한다
  // 문자열을 소문자별 대문자별로 정렬한다
  // 유니코드로 비교? 
  // 대문자를 배열1에 담고 소문자를 배열2에 담는다
  // 대소문자 비교, 대문자를 뒤로

  return s.split('').sort().reverse().join('');
}

console.log(s.split('').sort().reverse().join(''));