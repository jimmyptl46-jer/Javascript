var number = document.querySelector(".counter");
console.log(number);

number.innerHTML = "Jimmy";

let count = 1;

setInterval(() =>{
  if(count <= 1000){
    count++;
    number.innerText = count;
  } 
},10);

var followers = document.querySelector(".followers");


setTimeout(() =>{
  followers.innerText = "Followers on intsagram";
  

} ,3000)