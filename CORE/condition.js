// var  temperature ;

// temperature = 21;


// if (temperature < 20){  
//   console.log("Cold Outside");
// }
// else if(temperature > 20 && temperature < 30){
//   console.log("Moderate temp outside");
// }
// else{
//   console.log("Really hot outside");
// }


var isLoggedIn = false;
var isEmailVerified = true;
var cardInfo = true;

if (isLoggedIn){
  console.log("Logged In Success");

  if(isEmailVerified){
    console.log("Email is verified");

    if (cardInfo){
      console.log("You can make purchase")
    }
  }

}

if(isLoggedIn && isEmailVerified && cardInfo){
  console.log("You can make purchase");
}
else{
  console.log("Sorry access denied");
}

