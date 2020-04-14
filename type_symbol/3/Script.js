let sym = Symbol();
let obj = {
	a: 1, 
	b: 2, 
	c: 3,
	d: 4,
}
obj[sym] = function() {
	let sum = 0;
	for (let key in this){
		sum+= this[key];
	}
	document.write('Сумма: ' + sum);
}	



for (let key in obj){
	console.log(obj[key]);
}
obj[sym]();