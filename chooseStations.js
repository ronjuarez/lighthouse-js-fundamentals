
/*const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations) {
  for (let station of stations){
    let capacity = station[1];
    let type = station[2];
    let goodStations = [];
  

    if (capacity >= 20 && type === 'school' || type === 'community centre') {
      goodStations.push(station[0]);
      console.log(goodStations);
      
    }
  }
}

chooseStations(stations);
*/





const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations (stations) {
  for (let station of stations){
    let capacity = station[1];
    let goodStations = [];
  

    if (capacity >= 20) {
    
      let type = station[2];

      if  (type === 'school' || type === 'community centre') {
      goodStations.push(station[0]);

      }
    }
  }

  return goodStations()
};

chooseStations(stations);