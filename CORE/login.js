// allow user to access course if user is login from email or google or facebook

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google){
  console.log("Login Success");
}
else{
  console.log("Please make a login");
}


