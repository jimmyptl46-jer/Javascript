var myMap = new Map();

myMap.set(1,"Uno");
myMap.set(2,"dos");
myMap.set(3,"Tres");

console.log(myMap);

for(let key of myMap.keys()){
  console.log(`Key is ${key}`);
}


for(let value of myMap.values()){
  console.log(`Value is ${value}`);
}