//RANDOM NUMBER GENERATOR

/*
const min= 50;
const max =100
let rno = Math.floor(Math.random()*(max-min))+min;
console.log(rno);

*/
const mybtn = document.getElementById("mybtn");
const label1 =document.getElementById("label1");
const label2 =document.getElementById("label2");
const label3 =document.getElementById("label3");
const min= 1;
const max= 6;
let rno1 ;
let rno2 ;
let rno3 ;

mybtn.onclick =function(){
    rno1 = Math.floor(Math.random() * (max - min)) + min;
    rno2 = Math.floor(Math.random() * (max - min)) + min;
    rno3 = Math.floor(Math.random() * (max - min)) + min;
    console.log(rno1);
    console.log(rno2);
    console.log(rno3);
    label1.textContent =rno1;
    label2.textContent =rno2;
    label3.textContent =rno3;
}