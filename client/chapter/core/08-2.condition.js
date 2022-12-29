/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let a = 10;
let b = '';
let value = Boolean(b);


let age =20;

// age >= 14 && age <=90?;




// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

let user = 'wj';
let pw = '국룰';

let curId = prompt('아이디를 입력해 주세요','아이디 조건 없음').toLowerCase();
// let curPw= prompt('비밀번호를를 입력해 주세요','*****');

user == curId ? 
  (pw == prompt('비밀번호를를 입력해 주세요','*****') ? console.log('로그인 성공') : console.log('일치하는 비밀번호가 없습니다.')):
  console.log('일치하는 아이디가 없습니다.');