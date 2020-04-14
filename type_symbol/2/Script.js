let sym = Symbol('');
let obj = {
	a: 1, 
	b: 2, 
	c: 3,
	d: 4,
	[sym]: function() {alert('!')}
};

console.log(obj[sym]);

for (let key in obj){
	console.log(obj[key]);
}