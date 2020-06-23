function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findLast = findLast;
    this.remove = remove;
    this.dispReverse = dispReverse;
}
function find(item) {
    var currNode = this.head;
    while(currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;
}
function display() {
    var currNode = this.head;
    while(currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function findLast() {
    var currNode = this.head;
    while(currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
}
function remove(item) {
    var currNode = this.find(item);
    if(currNode.next !== null) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(currNode.previous !== null) {
        console.log(currNode.element);
        currNode = currNode.previous;
    } 
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russell", "Conway");
cities.insert("Carlisle", "Russell");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.dispReverse();