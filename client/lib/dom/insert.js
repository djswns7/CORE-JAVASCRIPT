
function name(params) {
  
}



function insertBefore(node, text){
  if(typeof node == 'string')
    node = getNode(node);

  if(node.nodeType != document.ELEMENT_NODE){
    throw new TypeError(
      'insertBefore 함수의 첫번째 인자는 ELEMENT 노드 여야합니다.'
    );
  }
  node.insertAdjacentHTML('beforebegin',text);
}

function insertAfter(node, text){
  if(typeof node == 'string')
    node = getNode(node);

  if(node.nodeType != document.ELEMENT_NODE){
    throw new TypeError(
      'insertBefore 함수의 첫번째 인자는 ELEMENT 노드 여야합니다.'
    );
  }
  node.insertAdjacentHTML('afterend',text);
}

function insertFirst(node, text){
  if(typeof node == 'string')
    node = getNode(node);

  if(node.nodeType != document.ELEMENT_NODE){
    throw new TypeError(
      'insertBefore 함수의 첫번째 인자는 ELEMENT 노드 여야합니다.'
    );
  }
  node.insertAdjacentHTML('afterbegin',text);
}

function insertEnd(node, text){
  if(typeof node == 'string')
    node = getNode(node);

  if(node.nodeType != document.ELEMENT_NODE){
    throw new TypeError(
      'insertBefore 함수의 첫번째 인자는 ELEMENT 노드 여야합니다.'
    );
  }
  node.insertAdjacentHTML('beforeend',text);
}
