let obj = {
	'a': 1, 
	'b': 2, 
	'c': 3, 
	};
function *createIterator(obj){
	for (let key in obj){
		yield obj[key];
	}
}
let iterator = createIterator(obj);

for (let elem of iterator){
	console.log(elem);
}