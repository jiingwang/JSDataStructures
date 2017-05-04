// 字典

// 定义字典类
function Dictionary() {
	this.dataSource = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.dataSource[key] = value;
}

function find(key) {
	return this.dataSource[key];
}

function remove(key) {
	delete this.dataSource[key];
}

function showAll() {
	const that = this;
	Object.keys(this.dataSource).forEach(function (key) {
		console.log(key + '->' + that.dataSource[key]);
	});
}

// 测试

var pbook = new Dictionary();
pbook.add('小王', '34');
pbook.add('小刘', '23');
pbook.add('小红', '21');
pbook.add('小李', '43');

pbook.showAll();

console.log('-------------------------------');

console.log('小李', pbook.find('小李'));

console.log('--------------------------------');

pbook.remove('小王');
pbook.showAll();

console.log('-------------------------------');


// 结果
/*
小王->34
小刘->23
小红->21
小李->43
-------------------------------
小李 43
--------------------------------
小刘->23
小红->21
小李->43
-------------------------------
[Finished in 0.1s]
*/


function count() {
	return Object.keys(this.dataSource).length;
}

console.log(pbook.count()); // 3
console.log('-------------------------------');

function clear() {
	const that = this;
	Object.keys(this.dataSource).forEach(function (key) {
		delete that.dataSource[key];
	});
}

pbook.clear()
pbook.showAll();
console.log('-------------------------------');


function showAll() {
	const that = this;
	Object.keys(this.dataSource).sort().forEach(function (key) {
		console.log(key + '->' + that.dataSource[key]);
	});
}


/*
遍历对象的三种方式
for in : 遍历该对象和继承自原型的可枚举属性

Object.keys() :  遍历该对象自身的可枚举属性

Object.getOwnPropertyNames():  遍历对象自身的所有属性
*/
