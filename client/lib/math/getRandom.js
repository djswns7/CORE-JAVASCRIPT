


import { typeError } from "../error/index.js";


export function getRandom(n) {
  if(!n) typeError('getRandom 함수는 1개 이상의 매개변수를 받아야 합니다.');
  if(typeof n !== 'number') throw new TypeError('getRandom 함수의 매개변수는 숫자 타입만이 가능합니다.')
  return Math.round(Math.random()*n);
  
}