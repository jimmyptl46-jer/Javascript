class User_1{
  constructor(name,email){
    this.name = name;
    this.email = email;
  }

  courseList = [];

  getInfo(){
    return {name : this.name , email : this.email};
  }

  enrollCourse(name){
    this.courseList.push(name);
  }

  getCourseList(){
    return this.courseList;
  }

  static login(){
    return "your are logged in";
  }
}

//module.exports = User_1;
let jimmy_1 = new User_1("Jimmy","Jimmyptl@gmail.com");
jimmy_1.enrollCourse("React JS");
jimmy_1.enrollCourse("MERN");
console.log(jimmy_1.getInfo());

class subAdmin extends User_1{

  constructor(name,email){
    super(name,email);
  }
 
  getsubAdminInfo(){
    return "Subadmin";
  }
}

const tom = new subAdmin("anshumi","anshumi@gmail.com");
console.log(tom.getsubAdminInfo());
console.log(tom.getInfo());


