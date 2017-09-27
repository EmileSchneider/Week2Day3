var selectionsort = function(array){
  var returnArray = [];
  for(var i = 0, l = array.length; i < l; i++){
    small = array[0];
    array.forEach(function(item){
      if(small == undefined){
        small = item;
      }
      else if(item < small){
        small = item;
      }
    });
    returnArray.push(small);
    array[array.indexOf(small)] = undefined;
  }
  return returnArray;
}
module.exports.selectionsort = selectionsort;
