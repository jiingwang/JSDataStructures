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
