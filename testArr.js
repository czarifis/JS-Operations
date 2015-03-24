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
var ll;
var array10k;
function timePopOfLinkedList(size){
    var start = new Date().getTime();
    ll = populateLinkedList(size);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Generating Linked List takes: ' + time);
}


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
    console.log('Adding an element into the array takes: ' + time);
}

array25 = populateArray(25);
array100 = populateArray(100);
ll25 = populateLinkedList(25);
ll100 = populateLinkedList(100);



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