let obj = {
	a: 1, 
	b: 2, 
	c: 3, 
	[Symbol.iterator]: function *() {
		for (let key in this){
		yield this[key];	
		}
	}
};

console.log(...obj); 