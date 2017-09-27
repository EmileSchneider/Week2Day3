var test = require("tape");
var qs = require("./quicksort.js")
var qs = qs.quicksort;

test("some small tests", function(t){
  t.test("first test", function(t){
    t.deepEqual(qs([3,2,1]),[1,2,3],"yeah sorted");
    t.deepEqual(qs([3,2,1,4]),[1,2,3,4],"yeah sorted");
    t.deepEqual(qs([3,1,2,4,5]),[1,2,3,4,5],"yeah sorted");
    t.deepEqual(qs([5,4,6,3,2,1]),[1,2,3,4,5,6],"yeah sorted");
    t.end();
  })
})
