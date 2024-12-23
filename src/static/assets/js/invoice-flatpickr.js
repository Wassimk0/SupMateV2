// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import flatpickr from 'flatpickr';

const customLocale = {
  weekdays: {
    shorthand: ["S", "M", "T", "W", "T", "F", "S"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Flatpickr with custom locale
  flatpickr("#Order_Status-datepicker", {
    enableTime: false,
    dateFormat: "d-m-Y",
    locale: customLocale
  });
});
