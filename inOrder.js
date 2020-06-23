function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}
function insert(data) {
    var node = new Node(data, null, null)
    if(this.root == null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if(data<current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
            if(current == null) {
                parent.right = node;
                break;
            }
            }
        }
    }
}
function inOrder(node) {
    if(node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}
function getMin() {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}
function getMax() {
    var current = this.root;
    while(current.right !== null) {
        current = current.right;
    }
    return current.data;
}
function find(data) {
    var current = this.root;
    while(current !== null) {
        if(current.data == data) {
            return current;
        } else if(data < current.data) {
            return current.left;
        } else {
            return current.right;
        }
    }
    return null;
}

var nums = new BST();
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
nums.insert(22)
console.log("Inorder travesal: ");
inOrder(nums.root)
console.log("\n");

var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);
console.log("\n");
