
let password=prompt("enter the password");
function isStrongPassword(password) {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return 'Too-short';
  }

  // Check if the password contains the string "password"
  if (password.includes("password")) {
    return ' Contains "password" ';
  }

  // Check if the password contains at least one uppercase character
  if (!password.match(/[A-Z]/)) {
    return 'No uppercase characters';
  }
       return password;
}
let result =isStrongPassword(password);
console.log(result);