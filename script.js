/* Function to show the contact form on button click */
function showContactForm() {
    var form = document.getElementById("contact-form");
    form.style.display = "block";
    var button = document.getElementById("contact-button");
    button.style.display = "none";
  }
  
  /* Function to validate the contact form on submission */
  function validateForm() {
    var name = document.forms["contact-form"]["name"].value;
    var email = document.forms["contact-form"]["email"].value;
    var message = document.forms["contact-form"]["message"].value;
    if (name == "" || email == "" || message == "") {
      alert("Please fill out all the fields.");
      return false;
    }
  }
  