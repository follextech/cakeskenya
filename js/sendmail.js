document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var formData = new FormData(event.target);

            // Convert FormData to a plain object
            var formObject = {};
            formData.forEach(function(value, key) {
                formObject[key] = value;
            });

            // Stringify the plain object to JSON
            var jsonString = JSON.stringify(formObject);

            // Log the JSON string
            console.log(jsonString);

 /* fetch('https://formsubmit.co/6c6a01e95c660b0223a57c443b5e9e92', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData))
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
  });*/
});
