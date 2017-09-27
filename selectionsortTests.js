var test = require("tape");
var ss = require("./selectionsort.js");

var ss = ss.selectionsort;

test("test the ss algorithemn", function(t){
  t.test("test", function(t){
    t.deepEqual(ss([4,6,2,1]),[1,2,4,6],"should be equal");
    t.deepEqual(ss([1,2,3,4]),[1,2,3,4], "should be equal");
    t.end();
  })
})
