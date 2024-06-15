document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
var form = event.target
var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // Create an object with the extracted values
            var formObject = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Stringify the object to JSON
            var jsonString = JSON.stringify(formObject);

            

  fetch('https://formsubmit.co/6c6a01e95c660b0223a57c443b5e9e92', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: "yyy"
  })
  .then(function(response) {
    if (response.ok) {
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
