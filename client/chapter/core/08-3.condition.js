/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

thisTime = LATE_NIGHT;

switch(thisTime){
  case MORNING:
      console.log('뉴스기사 글을 읽는다.') 
      break
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.')
    break
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.')
    break
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.')
    break
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.')
    break
  default:
    break
}

thisTime = LATE_NIGHT;
let weather;
/* switch문 → if문 변환 --------------------------------------------------- */
if(thisTime == MORNING && weather == 'rainy') {
  console.log('뉴스기사 글을 읽는다.');
}
else if(thisTime == LUNCH) 
  console.log('자주 가는 식당에 가서 식사를 한다.');

else if(thisTime == DINNER && weather == 'rainy') 
  console.log('동네 한바퀴를 조깅한다.');

else if(thisTime == NIGHT )  
  console.log('친구에게 전화를 걸어 수다를 떤다.');

else if(thisTime == LATE_NIGHT ||thisTime == DAWN) 
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');

else{
  console.log('잘못된 시간대 입니다.');
}
getDay();
/* switch vs. if -------------------------------------------------------- */

// let n = 7;

// if(n==1)
//   console.log('일');  
// else if(n==2)
//   console.log('월');   
// else if(n==3)
//   console.log('화');
// else if(n==4)
//   console.log('수');
// else if(n==5)
//   console.log('ㅁ');
// else if(n==6)
//   console.log('ㄱ');
// else if(n==7)
//   console.log('ㅌ');

function getDay(k){
  switch (k) {
    case 1:
      return 'Sun'; 
    case 2:
      return 'Mon'; 
    case 3:
      return 'Tue'; 
    case 4:
      return 'Wed'; 
    case 5:
      return 'Thu'; 
    case 6:
      return 'Fri';
    case 7:
      return 'Sat'; 
    default:
      break;
  }
}



// 함수: 매개변수(== 입력 input)를 받아서 할일을 하고 내뱉는 일을 하는거에대한 설명서
// 함수 == 값;

getDay(1); //'Sun'
'Sun';

class window1{
  사용한_팥 =11;
  사용한_밀가루 =2;
  
  _10분굽기(){

  }
}

let  붕어빵세트1 = window1;
붕어빵세트1.사용한_팥 = 23;


getDay('sdafsad');

window.console.log(33242134);


window.console.log(getDay(5));

let c = 3;
let d = Math.random();

function getRandom(k){
  return Math.round(Math.random()*k)
}
console.log(getRandom(3));
console.log(getDay(getRandom(3)));


function getDay2(a,b,c,d){ //설명서 
  //매개변수 == 함수 내에서 임시로 사용하는 변수(전달받은 값을 함수 사용을 위해서 담아'두는')
  // 사용1
  // a=1, b=2, c=3, d=4
  a.uppercase();
}

getDay2('Sun',424,34,34);

getDay2(1,2,3,4); // 사용1

getDay2(11,12,13,14); // 사용2

getDay2(21,22,23,24); // 사용3

