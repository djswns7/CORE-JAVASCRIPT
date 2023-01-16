

import { addClass, clearContents, copy, getInputValue, getNode, getRandom, insertLast, isNumericString, removeClass, showAlert, toggleClass} from "./lib/index.js";

import { jujeobData } from "./data/data.js";




const submit = getNode('#submit');
const resultArea = getNode('.result');

console.log(submit);

// console.log(getRandom(5));



function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  if (!name) {
    showAlert(".alert", "이름을 입력해주세요", 3000);

    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    // addClass(resultArea,'shake');
    // setTimeout(() => {
    //   removeClass(resultArea,'shake');
      
    // }, 1000);
    return;
  }

  if (isNumericString(name)) {
    showAlert(".alert", "제대로된 이름을 입력해주세요", 3000);
    addClass(resultArea,'shake');
    setTimeout(() => {
      removeClass(resultArea,'shake');
      
    }, 1000);
    return;
  }

  let list = jujeobData(name);

  let pick = list[getRandom(list.length-1)];

  // resultArea.textContent = pick;
  clearContents(resultArea);
  insertLast(resultArea,pick);
  
}

function clickCopyHandler() {
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text);

  //copy 자체의 return값이 Promise 객체라 바로 then 사용가능
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드에 복사가 완료됐습니다.',2000);
  });


  
}

submit.addEventListener('click',clickSubmitHandler);

resultArea.addEventListener('click',clickCopyHandler);







