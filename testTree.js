/**
 * Created by czarifis on 3/29/15.
 */


/**
 * benchmarking replacing keys of hashmaps.
 */
var hsmp = {};
var arr_hsmp = [];
function populate_hashmap_for_key_manipulation(size){

    for (var i = 0 ; i<size; i++) {
        arr_hsmp[i] = {id:i, val:"value "+i};
        hsmp[i] = arr_hsmp[i];
    }
    console.log("done!");
    //console.log(arr_hsmp,hsmp);
    //hsmp
};

function change_hashmap_keys(){

    var start = new Date().getTime();

    Object.keys(hsmp).forEach(function(key) {
        var newkey = key+'n';
        hsmp[newkey] = hsmp[key];
        delete hsmp[key];
    });

    var end = new Date().getTime();
    var time = end - start;
    console.log('replacing all the keys of a hashmap takes: ' + time);

}



Node = function() {
    this.ptr2obj = null;
    this.children = [];
    this.parent = null;
};

Structural_tree = function() {
    this.head =  new Node;
};






//called with every property and it's value
function process(key,value) {
    console.log(key + " : "+value);
}

function traverse(o,func) {
    console.log("traversing");
    for (var i in o) {

        if (o[i] !== null && typeof(o[i])=="object") {
            func.apply(this,[i,o[i]]);
            //going on step down in the object tree!!
            traverse(o[i],func);
        }
    }

}


function populate_structural_tree(amount) {

    var start = new Date().getTime();
    var map = {};
    map.zoom=new Number(10);
    map.markers = [];

    t = new Structural_tree();
    t.head.ptr2obj = map;

    // adding zoom child
    var ch_zoom = new Node();
    ch_zoom.ptr2obj = map.zoom;
    ch_zoom.parent = t.head.ptr2obj;
    t.head.children.push(ch_zoom);



    // adding markers child
    var ch_markers = new Node();
    ch_markers.ptr2obj = map.markers;
    ch_markers.parent = t.head.ptr2obj;
    t.head.children.push(ch_markers);


    for (var i = 0 ; i<amount ; i++){
        map.markers[i] = {lat:i, long:i};
        var marker_node = new Node();
        marker_node.ptr2obj = map.markers[i];
        marker_node.parent = ch_markers;
        ch_markers.children.push(marker_node);


    }
    //traverse(map,process);
    var end = new Date().getTime();
    var time = end - start;
    console.log('structural tree takes: ' + time +'ms');

    console.log(map,t);

}

function populate_hashmap(ammount){
    var start = new Date().getTime();
    var hash = {}
    var map = {};
    map.zoom=new Number(10);
    map.markers = [];


    hash['map'] = map;
    hash['map.zoom'] = map.zoom;
    hash['map.markers'] = map.markers;

    for (var i = 0 ; i<ammount ; i++){
        map.markers[i] = {lat:i, long:i};
        //var str = ['map.markers[',i,']'].join();
        //hash[str] = map.markers[i];
        hash['map.markers['+i+']'] = map.markers[i];


    }
    //traverse(map,process);
    var end = new Date().getTime();
    var time = end - start;
    console.log('hash takes: ' + time +'ms');



}

