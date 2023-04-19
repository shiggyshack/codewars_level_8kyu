function array(arr){
  arr = arr.split(',');
  if(arr.length <= 2){
    return null
  }
  else{ 
    return arr.slice(1,arr.length-1).join(' ')
  }
}
