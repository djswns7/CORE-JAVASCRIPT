


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