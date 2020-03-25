
/*let smartGarbage = function(trash, bins){
  let bin = Object.keys(bins);

for (let garbage of bin){   
  if (garbage === trash){
      bins.garbage++;
    };
  }
    return bins;
}
 

*/

const smartGarbage = function (trash, bins) {
  const bin = Object.keys(bins);// Object.keys turns the object into an array where the indexes become object properties and stores it in bin.

for (let garbage of bin) { // sets variable garbage as the [key] or [index] and their values as elements of the newly created bin array
  if (garbage === trash) {//  if our trash string is equal to the garbage to that is in the bin
  bins[garbage]++;// then add it to to the bin in - this and similar instances you cannot access bins[garbage] as bins.garbage becuase it is no longer an object its an array.
  }
  }
  return bins;
  }
  
  console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));