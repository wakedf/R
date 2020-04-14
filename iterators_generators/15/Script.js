let map = new Map();
map.set('a', 1);
map.set('b', 2);
let iterator = map.keys();

for (let elem of iterator) {
	console.log(elem);
}