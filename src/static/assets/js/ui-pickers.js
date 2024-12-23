/* global ripple, rippleContainer, css, rippleButtons, i, ii, childs, */
// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import flatpickr from 'flatpickr';

document.addEventListener('DOMContentLoaded', function () {
    if (typeof flatpickr !== 'undefined') {
        flatpickr("#datePicker", {
            dateFormat: "Y-m-d", // Specify the date format
        });
        flatpickr("#month_picker", {
            dateFormat: "M", // Specify the date format
        });
        flatpickr("#year_picker", {
            dateFormat: "Y", // Format for year
        });
        flatpickr("#full_date", {
            dateFormat: "Y-m-d", // Format for year
        });
        flatpickr("#order_date", {
            dateFormat: "d/m/Y",
        });
        flatpickr("#static_picker", {
            dateFormat: "d/m/Y",
            inline: true
        });
        flatpickr("#timePicker24", {
            enableTime: true, // Enable time selection
            noCalendar: true, // Disable calendar
            dateFormat: "H:i", // Format for 24-hour time
            time_24hr: true, // Use 24-hour format
        });

        // 12-hour time picker
        flatpickr("#timePicker12", {
            enableTime: true, // Enable time selection
            noCalendar: true, // Disable calendar
            dateFormat: "h:i K", // Format for 12-hour time with AM/PM
            time_24hr: false, // Use 12-hour format
        });
        flatpickr("#timePicker_static", {
            enableTime: true, // Enable time selection
            noCalendar: true, // Disable calendar
            dateFormat: "h:i K", // Format for 12-hour time with AM/PM
            time_24hr: false, // Use 12-hour format
            inline: true
        });
        flatpickr("#dateTimePicker12", {
            enableTime: true, // Enable time selection
            noCalendar: false, // Enable calendar for date selection
            dateFormat: "Y-m-d h:i K", // Format for date and time in 12-hour format
            time_24hr: false, // Use 12-hour format
        });
    }
});