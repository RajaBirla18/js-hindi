const name = "Raja Birla"
const gitRepo = 15;

console.log(name + gitRepo + " this is the github repo");
console.log(`My name is ${name} and my github repo counts are ${gitRepo}`);

const gameName = new String('Raja Birla');

console.log(gameName[0].__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(3));

const newString = gameName.slice(0,3)
console.log(newString);

const anotherString = "     birla     "

const trimExa = anotherString.trim()
console.log(anotherString);
console.log(trimExa);

const url = "https//rajabirla.com/raja%1902.birla"

console.log(url.replace('%', '_-_'))