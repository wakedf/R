let arr = [1, 2, 3, 4];
console.log(arr[Symbol.iterator]);
function *createIterator(arr){
	for (let i = 0; i < arr.length; i+=2){
		yield [arr[i], arr[i+1]];
	}
}
let iterator = createIterator(arr);
for (let elem of iterator){
	console.log(elem);
}