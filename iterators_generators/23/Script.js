let str = 'abcde'
function rts([...str]){
	let rts = '';
	for (let symbol of str){
		rts = symbol + rts;
	}
	return rts;
};
console.log(rts(str));