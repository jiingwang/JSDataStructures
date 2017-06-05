// hashtable 类
function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	this.betterHash = betterHash;
	this.betterPut = betterPut;
	// this.get = get;
}

function simpleHash(data) {
	var total = 0;
	for(var i=0; i<data.length; i++) {
		total += data.charCodeAt(i);
	}
	return total%this.table.length;
}

function put(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

function showDistro() {
	for (var i = 0; i<this.table.length; i++) {
		if (this.table[i]) {
			console.log(i+':'+this.table[i]);
		}
	}
}

var names = ['jones', 'jane', 'michael', 'marry', 'xiaoli'];
var hTable = new HashTable();
for(var i=0; i<names.length; i++) {
	hTable.put(names[i]);
}

hTable.showDistro();

// 更好的散列函数，避免碰撞

// 霍纳算法
function betterHash(data) {
	var total = 0;
	var H = 37;
	for (var i=0; i<data.length; i++) {
		total += H*total + data.charCodeAt(i);
	}
	total = total%this.table.length;
	if (total == 0) {
		total = this.table.length - 1;
	}
	return parseInt(total);
}

function betterPut(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}
console.log('----------------------------------------');
var names1 = ['jones', 'jane', 'michael', 'marry', 'xiaoli'];
var hTable1 = new HashTable();
for(var j=0; j<names1.length; j++) {
	hTable1.betterPut(names1[j]);
}

hTable1.showDistro();
