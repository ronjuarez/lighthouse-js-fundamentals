
/* function finalPosition (moves) {
  let x;// Declaration not needed as seen in the solution this and y are elements of an array.
  let y;// not needed.
  
  for (let move of moves) {
    let coordinates = [x, y]// value should be [0, 0] instead and should be decalred in the scope of the function.

  if (move === 'north'){ 
    x += 1} else if (move === 'east'){ // If statements should be controlling elements of coordinates array not x and y. 
      y += 1} else if (move === 'west'){
        y -= 1} else {
          x-= 1} 
        }

        
        return coordinates
      }
    
      

      
console.log(finalPosition(moves))*/

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 



function finalPosition(moves){ 
  let position = [0, 0]; 
for (let move of moves) {   
if (move === 'north'){
      position[1]++;
    } else if (move === 'south'){
      position[1]--;
    } else if (move === 'west'){
      position[0]--;
    } else if (move === 'east'){
      position[0]++;
    }
  }
  return position;
}

console.log(finalPosition(moves));