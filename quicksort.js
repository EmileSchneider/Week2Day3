var quicksort = function(array){
  if(array.length < 2){
    return array
  }
  var pivot = array[Math.floor(array.length/2)]

  var smallarr = [];
  var bigarr = [];

  for(var i = 0, l = array.length; i < l; i++){
    if(array[i] > pivot){
      bigarr.push(array[i]);
    }
    if(array[i] < pivot){
      smallarr.push(array[i]);
    }
  }
  return quicksort(smallarr).concat(pivot,quicksort(bigarr));
}
module.exports.quicksort = quicksort;
