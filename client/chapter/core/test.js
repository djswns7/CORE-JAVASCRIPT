


function first() {
  let x = 10;

  function second() {
    let y = 30;
    return x * y;
  }

  return second; // second()이렇게 바로 실행하면 값이 나오지만 의미가 없고?? 정해져서 나온 값이라서??
}

first // 설명서
first() // 값 

let value = first();

value = function() {
  let y = 30;
  return 10 * y;
}

console.log(value());



function a(x){
  console.log(x);
}


class C{
  variable1 = 'just example';
  variable2 = 3;
  variable3 = {
    innerVar1 : 'just text',
    innerVar2 : 33,
  };
}

function F(){
  return {
    variable1 : 'just example',
    variable2 : 3,
    variable3 : {
      innerVar1 : 'just text',
      innerVar2 : 33,
    }
  }
}

let madeByClass = new C();
let madeByFunction = F();



// prototype 은 선언할때의 설명(선언문)이 기준
function bar() {
  let a =5;
  let b =5;
  console.log( "bar..." );

  return 'str';
}

// let x =bar;

bar(); // == 스트링
'str';

let x = bar;

let y = bar;
// x.a =7;
y.prototype.b =7;

let z = bar;

// bar.a = 5;
console.log( bar.a );   // 5
console.log( bar.prototype.a ) //5
bar.prototype.a = 4;
console.log( bar.a );  // 5
console.log( bar.prototype.a ) //4



let arrNum = [1, 2, 3,434,234];

function callback(n){

    return n*n;
}

let sqaureArr = arrNum.forEach( callback ); 

// callback(1); //1
// callback(2); //4
// callback(3); //9
// callback(434);
// callback(234);

function nestedf (f) {
  let x = arrNum[0];
  return [f(x)];
}



nestedf( callback );


let arr2 = [1, 2, 3,12,30];
// for( let 변수 of 배열){
  
// }

let sqaureArr2 = [];
for(let n of arr2){
  sqaureArr2.push(n*n);
}


// for( let 변수 in 오브젝트){
  
// }

let obj3 = {
  aa:12,
  bb:33,
  cc:23
}

for(let n in obj3){
  sqaureArr2.push(n*n);
}


function gujobunhea(params) {
  return [1, 2, 3,434,234];
}


let p = gujobunhea();

// let p_a = p.a;
// let p_b = p.b;

[ p_a, p_b ] = gujobunhea();






//1-1
function getNode(node){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이여야 합니다.');
  }

  return document.querySelector(node) // {}
}

///////////////////////// 1-2
function getAttr(node, prop) { //'.first'
  // let node = '.first'
  // let prop = 'class'
  if (typeof node === 'string') { //'.first'
    node = getNode(node); // 값 {}
  }

  return node.getAttribute(prop);
  
}
getAttr ('.first','class')
document.querySelector('.first').getAttribute('class')


console.log(getAttr ('.first','class'));
// first

function sum(a,b) {
  return a+b;
}
console.log();

sum(3,4); //실행문 == 값
7

let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};






