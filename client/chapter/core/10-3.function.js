/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = a =>a;
console.log(calcAllMoney(2));
// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount)=>{
  let n = numeric;
  while(powerCount>1){
    powerCount--;
    numeric *= n;
  }

  return numeric;
}

console.log('2의 5승'+pow(2,5));
// repeat(text: string, repeatCount: number): string;
let repeat = function(text,number){
  while(number>0){
    number--;
    console.log(text);
  }
}
repeat('해치웠나?',4);

// Array.prototype.reduce();
// Array.prototype.forEach();


// const frontEndDev = [
//   'HTML',
//   'CSS',
//   'SVG',
//   'JavaScript',
//   'jQuery',
//   'React',
//   'Redux',
// ];

// // let i = 0;
// // while(i < frontEndDev.length){
// //   let value = frontEndDev[i];
// //   console.log(value);
// //   i++;
// // }

// let copyArray = [...frontEndDev];

// copyArray = frontEndDev.slice();
// // copyArray = frontEndDev.slice(0,frontEndDev.length);



// while(copyArray.length ){ //7
//   console.log(copyArray.pop());
//   // console.log('Redux');
// }


// class Student { // Object의 설명서

//   constructor(n) {
//     this.name = n;
//   }
//   name;
//   a = "21312"
//   b = "21312" 

//   fff = function(){
//     console.log(name);
//   }

//   f1 = function(){
//     console.log('hi');
//   }
// }

// Student.prototype.f1();

// // 프로토타입
// // 스태틱 객체
// let r1 = new Student('박원준');
// r1 = {
//   name:'박원준',
//   a : "21312",
//   b : "21312",
//   fff : function(){},
//   c : 'dfdf'
// }


