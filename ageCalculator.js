let ageCalculator = function (name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth;
  let agePhrase = name + " is " + age + " years old.";
  return agePhrase;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));