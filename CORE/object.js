var User = {

  name : " ",
  getUserName : function(){
    console.log(`User name is ${this.name}`);
  },

};

var jimmy = Object.create(User);
console.log(jimmy);

jimmy.name = "Jimmy";
jimmy.getUserName();
