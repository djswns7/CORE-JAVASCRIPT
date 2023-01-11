


var title = "환영합니다.";

var house = {
    title: "집이예요~",
    room: {
      title: "방입니다.",
      getTitle: function() {
          return this.title;
      }
    },
}

// window?
// 함수의 this는 바로 앞에서 실행시키는 놈
// 마구잡이로 만든 변수나 함수 또는 오브젝트는 window(로 추정되는 최상단 객체 일단 대충 window)의 소유 w

let fn = house.room.getTitle;
fn();
// 환영합니다. v

house.room.getTitle(); // == this.title

// 방입니다.

house.getTitle = house.room.getTitle;
house.getTitle(); // == this.title
// 집이예요~

var fn2 = house.room.getTitle;
fn2.call(house);
// 집이예요~

house.room.getTitle(); // 방입니다. 
(house.room.getTitle).call(house);
(() =>{  return this.title; }).call(house);

// ( 설명서).call( this 로 만들어줄 객체 );
// 집이예요~

house.getTitle = house.room.getTitle;
house.getTitle.call(house);
// 집이예요~
