var name="Ichchha";
// name="jenny";

let name1="Swostani";
// name1="Ichchha";

const name2="Ameesha";
// name2="raj";
var num=1;

console.log(typeof name);
console.log(typeof name1);
console.log(typeof name2);
console.log(typeof num);


let number=prompt("Enter a number:");
console.log(number);
 
// document.getElementsByClassName("paragraph")[3].style.backgroundColor="red";
// for changeing paragraph, id=class
document.getElementsByClassName("paragraph")[3].style.cssText="background:blue;color:white;font-size:60px";
document.getElementsByClassName("paragraph")[2].style.innerHTML="HI THIS IS WEEK 10!";
// to selct h1 by html
document.getElementsByTagName("h1")[1].innerHTML="DOM getElemntsByTagName example";