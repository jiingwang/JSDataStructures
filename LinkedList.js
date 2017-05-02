// 单向链表
function Node(element) {
	this.element = element;
	this.next = null;
}

function LList () {
	this.head = new Node("head");
	this.find = find;
	this.findPrevious = findPrevious;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
}

function find(item) {
	var currentNode = this.head;
	while(currentNode.element!=item) {
		currentNode = currentNode.next
	}
	return currentNode;
}


function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currentNode = this.head;
	while(currentNode != null) {
		console.log(currentNode.element);
		currentNode = currentNode.next;
	}
}

var cities = new LList();
cities.display();
cities.insert('second', 'head');
cities.insert('third', 'second');
cities.insert('second-third', 'second');
cities.display();

function findPrevious(item) {
	var currentNode = this.head;
	while(currentNode.next != null && currentNode.next.element != item) {
		console.log(currentNode.next);
		currentNode = currentNode.next;
	}
	return currentNode;
}

function remove(item) {
	var previousNode = this.findPrevious(item);
	if (previousNode.next != null) {
		previousNode.next = previousNode.next.next;
	}
}

cities.remove('second');
console.log('删除second后:');
cities.display();



// 双向链表

function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function insert(newElement, item) {
	var currentNode = this.find(item);
	var newNode = new Node(newElement);
	newNode.previous = currentNode;
	newNode.next = currentNode.next;
	currentNode.next.previous = newNode;
	currentNode.next = newNode;
}

function remove(element) {
	var currentNode = this.find(element);
	if (currentNode.next != null) {
		currentNode.previous.next = currentNode.next;
		currentNode.next.previous = currentNode.previous;
		currentNode.next = null;
		currentNode.previous = null;
	}
}

findLast() {
	var currentNode = this.head;
	while(currentNode.next != null)  {
		currentNode = currentNode.next;
	}
	return currentNode;
}

function dispReverse() {
	var lastNode = this.findLast();
	while(lastNode.previous != null) {
		console.log(lastNode.element);
		lastNode = lastNode.previous;
	}
	console.log(lastNode.element);
}