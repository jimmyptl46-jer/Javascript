// Creating a application with following roles:
// admin - get full access
// subadmin - gets access to create / delete courses
// testprep - get access to create / delete tests
//User - get access to consume content

var user = "testprep";


switch(user){
  case "admin":
    console.log("Full Access");
    break;
  
  case "subadmin":
    console.log("Create/Delete Course");
    break;
    
  case "testprep":
    console.log("Create / Delete test");
    break;
    
  case "user":
    console.log("Access the course");
    break;
    
  default:
    console.log("Trial");
    break;  
}