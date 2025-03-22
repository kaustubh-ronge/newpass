    function checkPassword() {
      const passwordInput = document.getElementById('passwordInput').value;
      const errorMessage = document.getElementById('errorMessage');
      const successMessage = document.getElementById('successMessage');

      // Set the correct password here
      const correctPassword = "sveri";

      if (passwordInput === correctPassword) {
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
      } else {
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
      }
    }
  
