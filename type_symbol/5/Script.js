let sym = Symbol.for('sym');
let arr = [1, 2, 3, 4]

arr[sym] = function() {
	let sum = 0;
	for (let key of this){
		sum+= key;
	}
	document.write('Сумма: ' + sum);
}	



for (let key of arr){
	console.log(key);
}
arr[sym]();