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

    var ar = new Array(amount);
    for (var i = 0; i < amount; i++) {
        //ar[i] = "hello ";
        ar.push("hello");
    }
    return ar;
}

function populateLinkedList(amount) {
    ll = new LinkedList();
    for (var i = 0; i < amount; i++) {
        ll.add("hello");
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
var ll;
function timePopOfLinkedList(size){
    var start = new Date().getTime();
    ll = populateLinkedList(size);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Generating Linked List takes: ' + time);
    return ll;
}

var array10k;
function timePopOfArray(size){
    var start = new Date().getTime();
    array10k = populateArray(size);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Generating an array takes: ' + time);
    return array10k

}

function add2Array() {
    var start = new Date().getTime();
    array10k.splice(1, 0, "new item");
    var end = new Date().getTime();
    var time = end - start;
    console.log('Adding an element into the array takes: ' + time);
}

function add2LinkedList() {
    var start = new Date().getTime();
    var node = ll.head;
    for (var i = 0 ; i<2; i++) {
        node = node.next;
    }
    var newNode = new Node("new item");
    newNode.next = node.next;
    node.next = newNode;
    var end = new Date().getTime();
    var time = end - start;

    console.log('Adding an element into the linked list takes: ' + time);
}

array25 = populateArray(25);
array100 = populateArray(100);
ll25 = populateLinkedList(25);

ll100 = populateLinkedList(100);

function timedAdd2CustLinkedList(custLL, size){
    var start = new Date().getTime();
    var node = custLL.head;
    for (var i = 0 ; i<size/2; i++) {
        node = node.next;
    }
    var newNode = new Node("new item");
    newNode.next = node.next;
    node.next = newNode;
    var end = new Date().getTime();
    var time = end - start;

    console.log('Adding an element into the linked list takes: ' + time);
}


function timedAdd2theBeginningOfCustLinkedList(custLL, size){
    var start = new Date().getTime();
    var node = custLL.head;
    var newNode = new Node("new item");
    newNode.next = node.next;
    node.next = newNode;
    var end = new Date().getTime();
    var time = end - start;

    console.log('Adding an element into the linked list takes: ' + time);
}

function timedAdd2CustArray(Arr){
    var start = new Date().getTime();
    Arr.splice(1, 0, "new item");
    var end = new Date().getTime();
    var time = end - start;
    console.log('Adding an element into the array takes: ' + time);
}

var array1k;
function populate1K(){
    array1k = timePopOfArray(1000)
}

function addTo1KArray(){
    timedAdd2CustArray(array1k)

}
function addToMiddleOf1KArray(){
    timedAdd2MiddleOfCustArray(array1k,1000)
}




var array1MList;
function populate1MList(){
    array1MList = timePopOfLinkedList(1000000)
}

function addToMiddleOf1MList(){
    timedAdd2CustLinkedList(array1MList,1000000);
}

function addTobeginningOf1MList(){
    timedAdd2theBeginningOfCustLinkedList(array1MList,1000000);
}

var array10MList;
function populate10MList(){
    array10MList = timePopOfLinkedList(10000000)
}

function addToMiddleOf10MList(){
    timedAdd2CustLinkedList(array10MList,10000000);
}

function addTobeginningOf10MList(){
    timedAdd2theBeginningOfCustLinkedList(array10MList,10000000);
}

function addTo1KArray(){
    timedAdd2CustArray(array1k)
}
function addToMiddleOf1KArray(){
    timedAdd2MiddleOfCustArray(array1k,1000)
}


var array10000;
function populate10K(){
    array10000 = timePopOfArray(10000)
}

function addTo10KArray(){
    timedAdd2CustArray(array10000)
}
function addToMiddleOf10KArray(){
    timedAdd2MiddleOfCustArray(array10000, 10000)
}


var array100K;
function populate100K(){
    array100K = timePopOfArray(100000)
}

function addTo100KArray(){
    timedAdd2CustArray(array100K)
}
function addToMiddleOf100KArray(){
    timedAdd2MiddleOfCustArray(array100K)
}

var array1M;
function populate1M(){
    array1M = timePopOfArray(1000000)
}

function addTo1MArray(){
    timedAdd2CustArray(array1M)
}

function addToMiddleOf1MArray(){
    timedAdd2MiddleOfCustArray(array1M)
}

var array10M;
function populate10M(){
    array10M = timePopOfArray(10000000)
}

function addTo10MArray(){
    timedAdd2CustArray(array10M)
}

function addToMiddleOf10MArray(){
    timedAdd2MiddleOfCustArray(array10M)
}

var array100M;
function populate100M(){
    array100M = timePopOfArray(100000000)
}

function addTo100MArray(){
    timedAdd2CustArray(array100M)
}
function addToMiddleOf100MArray(){
    timedAdd2MiddleOfCustArray(array100M)
}

var array1T;
function populate1T(){
    array1T = timePopOfArray(1000000000)
}

function addTo1TArray(){
    timedAdd2CustArray(array1T)
}
function addToMiddleOf1T(){
    timedAdd2MiddleOfCustArray(array100M)
}

function timedAdd2MiddleOfCustArray(Arr){
    var start = new Date().getTime();
    Arr.splice(Arr.length/2, 0, "new item");
    var end = new Date().getTime();
    var time = end - start;
    console.log('Adding an element into the middle of the array takes: ' + time);
}

ll100 = populateLinkedList(100);
