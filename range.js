


let range = function(start, end, step){
  let finalRange = [];
  
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return finalRange;
  } else {  
      for (start; start <= end; start += step){// note that you can use the a variable as an iterator even though you set it's value somewhere else
      finalRange.push(start);
  }
  
  return finalRange;
    }
}  
  


console.log(range(0, 10, 2));