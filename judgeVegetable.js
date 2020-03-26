

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

const judgeVegetable = function (vegetables, metric) {
  let index = 0;
  let highestValue = 0;


  for (let i = 0; i < vegetables.length; i++){
      if (vegetables[i][metric] >= highestValue){
        highestValue = vegetables[i][metric];
        index = i;
      }
    }


    return vegetables[index].submitter;
}

  

console.log(judgeVegetable(vegetables, metric))