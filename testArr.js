/**
 * Created by xhrdx on 3/20/15.
 */


Node = function(data) {
    this.data = data;
    this.next = null;
};

LinkedList = function() {
    this.head = this.tail = new Node;
};

LinkedList.prototype.add = function(data) {
    var node = new Node(data);
    this.tail.next = node;
    this.tail = node;
}

LinkedList.prototype.each = function(fn) {
    for (var node = this.head.next; node; node = node.next) {
        fn(node.data);
    }
}

function populateArray(amount) {
    ar = new Array();
    for (i = 0; i < amount; i++) {
        ar[i] = "hello " + i;
    }
    return ar;
}

function populateLinkedList(amount) {
    ll = new LinkedList();
    for (i = 0; i < amount; i++) {
        ll.add("hello " + i);
    }
    return ll;
}

function doSomething(value) {
    return value + "string concatination";
}

function iterateArray(array) {
    for (var i = 0, l = array.length; i < l; ++i) {
        doSomething(array[i]);
    }
}

function iterateLinkedList(list) {
    list.each(doSomething);
}

array25 = populateArray(25);
array100 = populateArray(100);
ll25 = populateLinkedList(25);
ll100 = populateLinkedList(100);