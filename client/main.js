

import { getInputValue, getNode } from "./lib/index.js";

import { jujeobData } from "./data/data.js";








const submit = getNode('#submit');

console.log(submit);



function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');

  let list = jujeobData(name);

  console.log(list);
}


submit.addEventListener('click',clickSubmitHandler);









