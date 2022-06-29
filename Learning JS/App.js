//old way of declaring variables

//var life=100;//This is my life bar and it is an intenger/number

//life=life*30;

//3000

//life=life/20;

//150

//var name="Anah Chacha";//this is the name displayed and it's a string

//var checkout=false;//BOOLEAN..no quotes because it's a reserved keyword

//var box;//it will be undefined cause it has no value assigned to it

//var box=null;

//console.log(box);
<!---->
//New way of declaring variables

//const life=100;

//life=life;

//console.log(life);
//it is going to bring an error because a constant variable cannot be redeclared again..it is constant all the way
<!---->
//using let variable....with this one,,well the values will definately change when they are redeclared

//let life=100;

//life=life*10;


//console.log(life);
<!---->
//Function-A set of code that is written to do things/task for us.

//const name="Developer Chacha";

//function adder(num1, num2){
    //console.log(num1 + num2);
//}
    
//adder(6, 8);
<!---->

//Arrays 
//const myAge=24;

//const yourAgee=21;

//console.log(myAge + yourAgee);
<!---->
//console.log("Hello my name is " + "Chacha" )
<!---->

//console.log("Hello it's me Chacha");
<!---->

//const name= "Chacha";

//console.log(`Hello it's me and my name is ${name}`);
<!---->

//const name="Chacha";
//const age=23;

//console.log("Hello it's me "  + name + "and my age is" + age + " and am from Tanzania");
//console.log(`Hello it's me ${name} and my age is ${age}`);
<!---->

//const combined= name + age;

//console.log(typeof age);
<!---->

//If statements are used to check and filter out what action is needed to  be performed
//const age = 16;

//if(age > 18){
  //console.log("you are good to go");  
//}
//else if(age < 15){
    //console.log("you are really young");
//}
//else{
    //console.log("you are not good to go");
//}
<!---->

//Arrays advanced-> arrays counts from zero,1,2,etc
//const schedule=['Sleep','Take Breakfast','Take lunch','Wake up'];
//console.log(schedule);-accessing all the values

 //schedule[0]
 //console.log(schedule[0])->accessing the fisrst values

 //push->add more things
 //schedule.push('Add new thing');
 //console.log(schedule);

 //pop->remove the last value from arrays
 //schedule.pop();
//console.log(schedule);

//shift->removing the first value in array
//schedule.shift();
//console.log(schedule);

//unshift->adding the cancelled value at the beginning
//schedule.unshift();
//console.log(schedule);

//indexOf->knowing the index number of the value in arrays
//schedule.indexOf('Sleep');
//console.log(schedule.indexOf('Sleep'));

//Javascript Objects and Keywords
const user={
   name:"Chacha",
    age:23,
    married:false,
    purchases:["phone","house","laptop"]
};
console.log(user.name);
console.log(user.purchases);
console.log(user.age);
console.log(user.married);

//THIS->if you want to know all the keywords used in javascript
//console.log(this);
//Jvascript loops and for loop
const names=["Sassy","Rachael","Barry","Anah","Eva","Eliana","Elena"];

for(name of names){
   console.log(name);
   if(name === "Rachael"){
    console.log("Rachael is in the names too");
    break;
  } 
}

//while loop


//const text=document.querySelector(".title" );
//const changeColor=document.querySelector(".changeColor");

//text.style.backgroundColor = "red";
//text.classlist.("changeColor");

//changeColor.addEventListener('click' function(){
   //text.classList.add("changeColor"); 
//})




const userList = document.querySelectorAll(".name-list li");


for(user of userList){
    user.addEventListener("click", function(){
        console.log(this);
    })
}



    






































































