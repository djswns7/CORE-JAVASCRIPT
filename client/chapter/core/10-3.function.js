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


let repeatExpression = (text,number) =>
  Array(number).fill(text).reduce((acc,cur,i)=>{
    return acc += cur;
  },'')

console.log(
  repeatExpression('reduce 어려워..',5)
);
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


/* ---------------------------------------------------------------------- */
/* Garbage Collection                                                     */
/* ---------------------------------------------------------------------- */


/* 가비지 컬렉션 기준 -------------------------------------------------------- */
// JavaScript는 도달 가능성(reachability)에 따라 메모리를 관리합니다.
// 도달 가능한 값은 쉽게 말해 어떻게든 접근하거나 사용할 수 있는 값을 의미합니다.
// 도달 가능한 값은 메모리에서 삭제되지 않습니다.

// JavaScript Engine 내부의 Garbage Collector가 끊임없이 도달 가능한 값을 확인합니다.
// Garbage Collector에 의해 확인 된 도달 할 수 없는 값은 메모리에서 삭제됩니다.

const memoizedObject = {
  name: '메모리에 기억된 객체',
};

// memoizedObject가 참조한 데이터를 메모리 상에서 제거하도록 코드를 작성해봅니다.
// ※ 도달할 수 없는 상태가 되면 Garbage Collector에 의해 메모리 상에서 제거됩니다.



/**
 * JavaScript는 Garbage Collector에 의해 메모리가 관리되므로
 * 개발자가 임의로 데이터를 메모리에 상주할 수 없도록 막거나 하는 것을 할 수 없습니다.
 */
