document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
var form = event.target
var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // Create an object with the extracted values
            var formObject = {
                access_key: "9e484a3d-976a-48bb-a70d-a220af697a38",
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Stringify the object to JSON
            var jsonString = JSON.stringify(formObject);

            

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonString
  })
  .then(function(response) {
    if (response.ok) {
      console.log(response)
      // Show success message
      var successMessage = document.querySelector('.sent-message');
      successMessage.style.display = 'block';
      
      // Hide the success message after 5 seconds
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 5000);

      form.reset();
    } else {
      // Show error message
      var errorMessage = document.querySelector('.error-message');
      errorMessage.textContent = 'An error occurred. Please try again.';
      errorMessage.style.display = 'block';
      
      // Hide the error message after 5 seconds
      setTimeout(function() {
        errorMessage.style.display = 'none';
      }, 5000);
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
    
    // Show error message
    var errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = 'An error occurred. Please try again.';
    errorMessage.style.display = 'block';
    
    // Hide the error message after 5 seconds
    setTimeout(function() {
      errorMessage.style.display = 'none';
    }, 5000);
  });
});
