var test = require("tape");
var bs = require("./binarySearch.js");

var a = [1,2,3,4,5,6,7,8,9];
var binarysearch = bs.binarysearch;
test("test binarysearch", function(t){
  t.test("some easy arrays", function(t){
    t.equal(binarysearch([1,2,3,4,5,6,7,8,9],1),0, "1 is at index 0");
    t.equal(binarysearch([1,2,3,4,5,6,7,8,9],2),1, "2 is at index 1");
    t.equal(binarysearch([1,2,3,4,5,6,7,8,9],3),2, "3 is at index 2");
    t.equal(binarysearch(a,5),4, "5 is at index 4");
    t.equal(binarysearch(a,6),5, "6 is at index 5");
    t.equal(binarysearch(a,7),6, "6 is at index 5");
    t.equal(binarysearch(a,8),7, "6 is at index 5");
    t.equal(binarysearch(a,12),-1, "12 is not in the array");
    t.end();
  });
});
