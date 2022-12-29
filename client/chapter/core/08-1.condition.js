/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let number = prompt('숫자를 입력해 주세요',0);


// let message = 
// (number > 0) ? '1' : 
// (number < 0) ? '-1': 
// '아무것도 아닙니다.';

// console.log(message);



/* 
if(number > 0){
  
}else if(number < 0){
  
}else{
  
}
 */







// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';



if(prompt('어제 영화 보셨나요?','yes or no').includes('yes')){ // if 문(statement)
  console.log('그거 재밌더라..?');

}else if(prompt('그럼 보실건가요?','yes or no') === 'yes'){ // else if 복수 조건 처리
  console.log('저랑 같이는요?');

}else{ // else 절(caluse)
  console.log('ㅇㅎ..');
}




let movieMessage = 
(didWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie === 'yes') ? '너무 설렌다~~' : '난 별루...'





// 조건부 연산자

// 멀티 조건부 연산자 식


