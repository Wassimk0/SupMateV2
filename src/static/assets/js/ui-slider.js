// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Import noUiSlider
import noUiSlider from "nouislider";


document.addEventListener("DOMContentLoaded", function () {
  var snapSlider = document?.getElementById("continuous");
  noUiSlider.create(snapSlider, {
    connect: false, // Set to false to remove the connect bar between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [0], // Single handle start position
    range: {
      min: [0],
      max: [100],
    },
  });

  var disabled = document?.getElementById("disabled");
  noUiSlider.create(disabled, {
    connect: false, // Set to false to remove the connect bar between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [30], // Single handle start position
    range: {
      min: [3.5],
      max: [100],
    },
  });

  var discrete = document?.getElementById("discrete");
  noUiSlider.create(discrete, {
    connect: false, // Set to false to remove the connect bar between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [0], // Single handle start position
    step: 10,
    range: {
      min: [0],
      max: [100],
    },
    tooltips: [true], // Enables tooltip for the single handle
    format: {
      to: function (value) {
        return Math.round(value); // Optional: round the value for display
      },
      from: function (value) {
        return Number(value); // Convert the value back to number
      },
    },
    pips: { // Add pips to show specific values
      mode: 'values',
      values: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      density: 100, // Adjust the density to fit your needs
    }
  });

  // Function to hide pips values
  function hidePipsValues() {
    var pips = document.querySelectorAll('.noUi-value');
    pips.forEach(function(pip) {
      pip.style.display = 'none';
    });
  }

  // Call the function to hide pips values after slider is initialized
  hidePipsValues();

  var restrictedValues = document?.getElementById("restrictedValues");
  noUiSlider.create(restrictedValues, {
    connect: false, // Set to false to remove the connect bar between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [0], // Single handle start position
    range: {
      min: [0],
      max: [100],
    },
    tooltips: [true], // Enables tooltip for the single handle
    format: {
      to: function (value) {
        // Format values to specific values with °C
        if (value <= 0) return "0°C";
        if (value <= 20) return "20°C";
        if (value <= 37) return "37°C";
        if (value >= 100) return "100°C";
        return Math.round(value) + "°C";
      },
      from: function (value) {
        // Convert formatted value back to number
        if (value === "0°C") return 0;
        if (value === "20°C") return 20;
        if (value === "37°C") return 37;
        if (value === "100°C") return 100;
        return Number(value.replace("°C", ""));
      },
    },
    pips: {
      // Add pips to show specific values
      mode: "values",
      values: [0, 20, 37, 100],
      format: {
        to: function (value) {
          // Format pips values with °C
          return value + "°C";
        },
        from: function (value) {
          // Convert formatted pips value back to number
          return Number(value.replace("°C", ""));
        },
      },
      density: 100, // Adjust the density to fit your needs
    },
  });

  var rangePrimary = document?.getElementById("range-primary");
  noUiSlider.create(rangePrimary, {
    connect: true, // Connect the range between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [0, 999], // Initial values for the handles
    range: {
      min: [0],
      max: [999],
    },
    tooltips: [true, true], // Enable tooltips for both handles
    format: {
      to: function (value) {
        return `$${Math.round(value)}`; // Format value with $ and round it
      },
      from: function (value) {
        return Number(value.replace(/^\$/, "")); // Convert the value back to number, remove $
      },
    },
  });

  var regularSizes = document?.getElementById("regularSizes");
  noUiSlider.create(regularSizes, {
    connect: false, // Set to false to remove the connect bar between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [0], // Single handle start position
    range: {
      min: [0],
      max: [100],
    },
  });

  var smallSizes = document?.getElementById("smallSizes");
  noUiSlider.create(smallSizes, {
    connect: false, // Set to false to remove the connect bar between handles
    behaviour: "tap", // Allows you to click on the slider to set the handle position
    start: [0], // Single handle start position
    range: {
      min: [0],
      max: [100],
    },
  });
});