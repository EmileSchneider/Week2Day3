var binarysearch = function(array, integer, start, end){
  if(start == undefined){
    start = 0;
    end = array.length;
  }
  if(array.length == 1){
    if(array[0] == integer){
      return start;
    } else {
      return -1;
    }
  }
  if(array[Math.floor(array.length/2)] === integer){
    return start + Math.floor(array.length/2);
  }
  if(array[Math.floor(array.length/2)] > integer){
    end = Math.floor((start + end) / 2);
    return(binarysearch(array.slice(0, Math.floor(array.length/2)),integer,start, end));
  }
  if(array[Math.floor(array.length/2)] < integer){
    start = Math.floor((start + end) / 2);
    return(binarysearch(array.slice(Math.floor(array.length/2), array.length), integer, start, end));
  }


}


module.exports.binarysearch = binarysearch;
