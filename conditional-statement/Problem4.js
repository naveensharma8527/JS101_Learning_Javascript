 // Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "Naveen1999";
let stored_password = "1234";

let input_username = "Naveen1999";
let input_password = "1234";

if(stored_username == input_username){
  if(stored_password == input_password){
    console.log("The user can login");
  }
  else{
    console.log("The password is wrong. The user can't login");
  }
}
else{
  console.log("Username is incorrect.The user can't login");
}