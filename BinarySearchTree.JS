// node类
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show () {
    return this.data;
}


// BST类
function BST() {
    this.root = null;
    this.insert = insert; // 插入数据方法
    this.inOrder = inOrder; // 中序遍历
    this.preOrder = preOrder; // 先序遍历
    this.postOrder = postOrder; // 后序遍历
}

function insert(data) {
    var n = new Node(data, null, null);
    var parent;
    if(this.root == null) {
        this.root = n;
    } else {
        while(true) {
            parent = current;
            if (data < current.data ) {
                current = current.left;
                if (!current)  {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序遍历
function inOrder(node) {
    if(node) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

// 先序遍历
function  preOrder (node) {
    if (node) {
        console.log(node.show()+"");
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后序遍历
function postOrder(node) {
    if (node) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show()+"");
    }
}