


var _promise = function (param) {

	return new Promise(function (resolve, reject) {

		// 비동기를 표현하기 위해 setTimeout 함수를 사용 
		window.setTimeout(function () {

			// 파라메터가 참이면, 
			if (param) {

				// 해결됨 
				resolve("해결 완료");
			}

			// 파라메터가 거짓이면, 
			else {

				// 실패 
				reject(Error("실패!!"));
			}
		}, 3000);
	});
};

function resolve(n) {
  console.log('Success');
  console.log(n);
}

function reject(n) {
  console.log('Fail');
  console.log(n);
}

function myFunc(resolve,reject) {
  console.log('hi');
  resolve('T');
  reject('F');
}


let x = new Promise(myFunc);

x.then(function (n) {
  console.log('Success');
  console.log(n);
},
function (n) {
  console.log('Fail');
  console.log(n);
})