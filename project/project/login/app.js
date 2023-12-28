function validateForm() {
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;
  
    if (!isValidEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
  
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