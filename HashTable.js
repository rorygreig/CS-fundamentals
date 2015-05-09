var print = console.log;

function HashTable() { 
	this.table = new Array(137); 
	this.simpleHash = simpleHash; 
	this.betterHash = betterHash;
	this.showDistro = showDistro; 
	this.put = put;
	//this.get = get;
}

function put(data) {
	var pos = this.betterHash(data); 
	this.table[pos] = data;
}

function simpleHash(data) {
	var total = 0;
	for (var i = 0; i < data.length; ++i) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length; 
}

function betterHash(string, arr) {
	var H = 37;
	var total = 0;
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	return parseInt(total); 
}

function showDistro() { 
	for (var i = 0; i < this.table.length; ++i) { 
		if (this.table[i] != undefined) {
			print(i + ": " + this.table[i]); 
		}
	} 
}


module.exports = HashTable;