/**
 * Created by czarifis on 3/29/15.
 */


/**
 * benchmarking replacing keys of hashmaps.
 */
var hsmp = {};
var arr_hsmp = [];
function populate_hashmap(size){

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


function populate_structural_tree() {
    temp_arr = [];

    var map = {};
    map.zoom=new Number(10);
    map.markers = [];

    t = new Structural_tree();
    t.head.ptr2obj = map;

    // adding zoom child
    ch_zoom = new Node();
    ch_zoom.ptr2obj = map.zoom;
    ch_zoom.parent = t.head.ptr2obj;
    t.head.children.push(ch_zoom);



    // adding markers child
    ch_markers = new Node();
    ch_markers.ptr2obj = map.markers;
    ch_markers.parent = t.head.ptr2obj;
    t.head.children.push(ch_markers);


    for (var i = 0 ; i<10 ; i++){
        map.markers[i] = {lat:i, long:i};

    }
    //traverse(map,process);

    console.log(map,t);
    var t = new Structural_tree();


    return t;
}



