// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0




import Sortable from 'sortablejs';
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

document.addEventListener("DOMContentLoaded", async function () { 
  new Sortable(document.getElementById('todo'), {
    group: 'shared',
    animation: 150,
    nested: true,
  });

  new Sortable(document.getElementById('in-progress'), {
    group: 'shared',
    animation: 150,
    nested: true,
  });

  new Sortable(document.getElementById('done'), {
    group: 'shared',
    animation: 150,
    nested: true,
  });

  // Initialize Flatpickr with custom locale
  flatpickr("#todo-datepicker", {
    enableTime: false,
    dateFormat: "d-m-Y",
    locale: customLocale
  });
});
