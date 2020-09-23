function getUserRole(nam,role){
  switch(role){
    case "admin":
      return `${name} is admin with all access`
      break;

    case "subadmin":
      return `${name} is subadmin `
      break;
    
    case "testprep":
      return `${name} is trestprep`
      break;
      
    case "user":
      return `${name} is user`
      break;
      
    default:
      return ` ${name} is trial user`
      break;  
  }
}

var r1 = getUserRole("Jimmy","admin");
console.log(r1);

var r2 = getUserRole("Anshumi","subadmin");
console.log(r2);

var r3 = getUserRole("Jimmy","testprep");
console.log(r3);
