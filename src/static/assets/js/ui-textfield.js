// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



document.addEventListener('DOMContentLoaded', () => {
  // Select all toggle password buttons
  const toggleButtons = document.querySelectorAll('.toggle-password');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the target password field from the data attribute
      const targetSelector = button.getAttribute('data-target');
      const passwordField = document.querySelector(targetSelector);

      if (passwordField) {
        // Toggle the password field type between 'password' and 'text'
        const currentType = passwordField.getAttribute('type');
        if (currentType === 'password') {
          passwordField.setAttribute('type', 'text');
          button.innerHTML = '<i class="ri-eye-off-fill text-2xl cursor-pointer"></i>';
        } else {
          passwordField.setAttribute('type', 'password');
          button.innerHTML = '<i class="ri-eye-fill text-2xl cursor-pointer"></i>';
        }
      }
    });
  });
});