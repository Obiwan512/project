function validateForm() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
  
    if (!isValidEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    var passwordInput = document.getElementById("password");
    var passwordValue = passwordInput.value;
    checkPasswordStrength(passwordValue);
  

  
    return true;
  }
  
  function isValidEmail(email) {

    if (email.includes('@')) {
      return true;
    } else {
      alert("Please enter a valid email address.");
      return false;
    }
  }
  
  function checkPasswordStrength() {
    var password = document.getElementById("password");
    var passwordStrengthMessage = document.getElementById("password-strength");

    var containsUppercase = /[A-Z]/.test(password.value);
    var containsLowercase = /[a-z]/.test(password.value);
    var containsNumbers = /\d/.test(password.value);
    var containsSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

    if (containsUppercase && containsLowercase && containsNumbers && containsSymbols) {
        passwordStrengthMessage.innerHTML = "Password is strong";
        passwordStrengthMessage.className = "strong-password";
    } else if (containsUppercase || containsLowercase || containsNumbers) {
        passwordStrengthMessage.innerHTML = "Medium power password";
        passwordStrengthMessage.className = "medium-password";
    } else {
        passwordStrengthMessage.innerHTML = "Password is weak";
        passwordStrengthMessage.className = "weak-password";
    }
}