/* 
let age =25;
let price= 10.99;
let firstname = "Amit Kuswaha";
console.log(`you are  ${age}  years old`);
console.log(`you are  ${price}  years old`);
console.log(`you are  ${firstname} kiran`);
 

let yourName= "Anushka singh";
let student = false;
document.getElementById("p1").textContent= `your name is ${yourName}`;
document.getElementById("p2").textContent= `your age is ${age}`;
document.getElementById("p3").textContent = `Are you a student? ${
  student ? "Yes" : "No"}`;

*/

/*   
        ARITHMETIC PROBLEM
let student =30;
student = student +10;
console.log(student);
student*=2;
console.log(student);

*/

/*          Accpet value through promp window
// HOW TO ACCEPT USER INPUT
let user ;
user= window.prompt("what is your userName?");
console.log(user);
*/

//        getting from user input html textbox

/*
let userName;
document.getElementById("mySubmit").onclick = function(){
    userName= document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${userName}`;

}
*/

/*
//type conversion = change the data type to another
let age = window.prompt("how old are you?");
console.log(typeof age);
age = Number(age);
age+= 4;
console. log(age, typeof age);


let x ="pizza";
let y ="pizza";
let z ="pizza";
x= Number(x);
y= String(y);
z= Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

//  = assignment operator
// == comparison operator
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator 
// !== strict inequality

const PI =3.14159;
let radius;
let circumference;
document.getElementById("mySubmit").onclick= function(){
    radius= document.getElementById("myText").value;
    circumference= 2*PI*radius;
    document.getElementById("myH3").textContent = circumference;
}