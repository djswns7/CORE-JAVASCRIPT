function addClass(node,className) {
  let curNode = getNode(node);

  if(typeof className != 'string'){
    throw new typeError('addClass 함수의 두 번째 인자는 문자타입 이어야 합니다.');
  }

  return curNode.classList.add(className);
}

function removeClass(node,className) {
  let curNode = getNode(node);

  if(!className){
    node.className = '';
    return;
  }
  if(typeof className != 'string'){
    throw new typeError('removeClass 함수의 두 번째 인자는 문자타입 이어야 합니다.');
  }

  curNode.classList.remove(className);
}


function toggleClass(node,className) {
  let curNode = getNode(node);

  if(typeof className != 'string'){
    throw new typeError('toggleClass 함수의 두 번째 인자는 문자타입 이어야 합니다.');
  }

  node.classList.toggle(className);
}

// 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 x 
// [ ] 각괄호 표기법 
function getCss(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    throw new SyntaxError('입력한 getCSS 함수의 두 번째 인자가 유효한 css 속성이 아닙니다.');
  }
  return getComputedStyle(node)[prop];
  
}

function setCss(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){
    throw new SyntaxError('입력한 setCSS 함수의 두 번째 인자가 유효한 css 속성이 아닙니다.');
  }

  if(!value){
    syntaxError('setCss 함수의 세 번째 인자는 필수값 입니다.')
  }
  node.style[prop] = value;
  
}

const css = (node,prop,value)=> !value?getCss(node,prop):setCss(node,prop,value);