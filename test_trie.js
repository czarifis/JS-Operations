/**
 * Created by xhrdx on 3/3/15.
 */

words = ["sth", "sth.else","sth.More","yolo", "yolo.Man", "something.completely.different"]

impl_trie = []
// Go through all the words in the dictionary
for ( var i = 0, l = words.length; i < l; i++ ) {
    var path = words[i].split(".");
    console.log(path);
    for( var j = 0; j < path.length; j++){
        var result = impl_trie[path[j]];
        console.log("sup?"+result);
    }

    impl_trie[words[i]] = "found"
}