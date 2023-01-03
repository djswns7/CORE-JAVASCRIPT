/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */





let key = 'standardName';

// console.log( key in javaScript );
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key));
// Object.prototype.nickName = 'tiger'

// 객체 자신의(own) 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(Object.prototype.hasOwnProperty.call(javaScript,key));

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function (){
    return '헤헤'
  }
};

let a = {};


for(let key in javaScript){

  // (사용하고자 하는 객체명).(사용하려는 함수).call((사용하려는 함수를 원래 갖고 있는 객체),(추가로 전달할 인자),(인자),(인자))
  if({}.hasOwnProperty.call(javaScript,key)){
      console.log(key);
  }

}
for(let key in javaScript){


  console.log("2."+key);
  

}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?



for(let i =0; i<5;i++){
  //something to do
}

let i =0;
for(    ; i<5;i++){
  //something to do
}






