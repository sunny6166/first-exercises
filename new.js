//names and inputs

var hacker1 = 'john';
var hacker2 = 'prompt'('Navigator Name ?')
console.log(hacker1);
console.log(hacker2);


//which name is longer

function longerName(name1,name2){
if (name1.length > name2.length ){
    console.log('The Driver has the longest name, it has XX characters');
}
else if(name1.length < name2.length){
    console.log('Yo, navigator got the longest name, it has XX characters or');
}
else {
    console.log('wow, you both got equally long names, XX characters!!');
}
}
longerName(hacker1,hacker2);


//names in capital and spacing
 var split = hacker1.toUpperCase().split(' ');
 console.log(split);
 console.log(hacker2.split('').reverse().join(''));

 //the name will come first lexicographic 

var name = 'Kohn';
var newName = 'sunny'

var cmp = name.localeCompare(newName);
if (cmp < 0){
  console.log(name + ' goes first')
}
else if(cmp > 0 ){
  console.log(newName + 'goes first')
}