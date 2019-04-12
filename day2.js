//find largest num 
var arr = [40,50,60];
var max = arr.reduce(function(accu,current){
  return Math.max(accu,current)
})
console.log(max);


//find the longest word


var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
var longest = words.reduce(function(accu,current){
  return accu.length > current.length ? accu : current
})
console.log(longest);


//sum of numbers

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

var sum = numbers.reduce(function(accu,current){
  return accu + current;
})
console.log(sum);

//calculate average

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

var avg = numbers.reduce(function(acc,cur){
  return acc + cur;
})
console.log(avg / numbers.length);

//calculate average of strings

var words = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
];
function averageWord(words) {
var strAvg = words.reduce(function(accc,curr){
  return accc + curr.length;
},0)
return (strAvg / words.length)
}
console.log(averageWord(words));

//unique arrays

var words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
var newWords = [];
function uniquifyArray (words){
  for(let i =0; i <words.length;i++){
    if(newWords.indexOf(words[i])< 0){
      newWords.push(words[i])
    }
  }
  return newWords;
}
console.log(uniquifyArray(words));

//finding element

var words = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];


function doesWordExist (acc,curr){
  return acc.some(function(arrval){
    return curr === arrval;
  })
}
doesWordExist(words,'trouble');

//find num of times words appear 


var words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
];



function howManyTimes(unique) {
  var count = [];
  unique.forEach(function(unique) {
  count[unique] = (count[unique] || 0) + 1;
  });
  return count;
}

console.log(howManyTimes(words));