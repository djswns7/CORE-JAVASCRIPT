var title = "환영합니다.";
var house = {
    title: "집이예요~",
    room: {
      title: "방입니다.",
      getTitle: function() {
          return this.title;
      }
    }
}

var fn = house.room.getTitle;
fn();
// 환영합니다.

house.room.getTitle();
// 방입니다.

house.getTitle = house.room.getTitle;
house.getTitle();
// 집이예요~

var fn2 = house.room.getTitle;
fn2.call(house);
// 집이예요~

house.room.getTitle.call(house);
// 집이예요~

house.getTitle = house.room.getTitle;
house.getTitle.call(house);
// 집이예요~