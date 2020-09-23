var User = function(firstName , courseCount){
  this.firstName = firstName;
  this.courseCount = courseCount;

  this.getCourseCount = function(){
    console.log(`Course count is ${this.courseCount}`);
  };
};

var jimmy = new User("Jimmy",2);
console.log(jimmy);
jimmy.getCourseCount();


var anshumi = new User("Anshumi",3);
console.log(anshumi);
anshumi.getCourseCount();


User.prototype.getFirstName = function(){
  console.log(`Your firstname is: ${this.firstName}`);
}


if (anshumi.hasOwnProperty("firstName")){
  anshumi.getFirstName();
}
anshumi.getFirstName();

var myA = [2,3,4,5];
console.log(myA);
