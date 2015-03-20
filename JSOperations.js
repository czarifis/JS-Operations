/**
 * Created by Costas Zarifis on 2/26/15.
 */


var sth = {
    "id" : "someID",
    "map": {
        "id" : "someID2",
        "zoom": 10,
        "id2" : "someID3",
            "markers": [
            {   "id1" : "someID3",
                "lat": 50,
                "id2" : "someID3",
                "long": 60,
                "id3" : "someID3",
                "window": {}
            },
            {
                "lat": 70,
                "long": 80,
                "window": {}
            }
        ]
    }
}


//console.log(sth);
var parsed = iterate(sth)

console.log(JSON.stringify(parsed,null, 4));
function iterate(json) {

    if (typeof json === "object") {
        var object = {};
        for (var item in json) {
            if (item.indexOf("id") === -1) {
                var attrName = item;

                var attrValue = iterate(json[item]);
                    object[attrName] = attrValue;


                //console.log(object)
                //iterate
            }
        }
        return object;
    }
    else{
        return json;
    }
}