// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



let increment = 0; // Initialize value for the progress bar
let direction = 1; // 1 for increasing, -1 for decreasing
const incrementStep = 1; // Amount to increase or decrease by
const updateInterval = 30; // Interval in ms

function updateProgress() {
  increment += direction * incrementStep; // Increment or decrement
  
  if (increment >= 110) {
    increment = 110;
    direction = -1; // Change direction to decrease
  } else if (increment <= -10) {
    increment = 0;
    direction = 1; // Change direction to increase
  }

  // Update the width and aria-valuenow
  document.getElementById("progress-bar").style.width = increment + "%";
  var progressElement = document.getElementById("determinate");
  progressElement.setAttribute("aria-valuenow", increment);
}

// Initialize interval
window.setInterval(updateProgress, updateInterval);

function progressAnimation() {
  return {
      strokeDashoffset: 100,
      maxProgress: 100,
      duration: 5000, // Duration of one complete cycle in milliseconds
      startTime: 0,
      direction: 1, // 1 for forward, -1 for backward

      startAnimation() {
          this.startTime = performance.now();
          this.animate();
      },

      animate() {
          const currentTime = performance.now();
          const elapsed = currentTime - this.startTime;
          const progress = (elapsed % this.duration) / this.duration;

          if (this.direction === 1) {
              // Forward animation
              this.strokeDashoffset = this.maxProgress * (1 - progress);
              if (progress >= 1) {
                  this.direction = -1; // Change direction to backward
                  this.startTime = currentTime; // Reset startTime for backward animation
              }
          } else {
              // Backward animation
              this.strokeDashoffset = this.maxProgress * progress;
              if (progress <= 0) {
                  this.direction = 1; // Change direction to forward
                  this.startTime = currentTime; // Reset startTime for forward animation
              }
          }

          requestAnimationFrame(() => this.animate());
      }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let progress = 0;
  let buffer = 10; // This is a dummy value to initialize

  function updateProgress() {
    if (progress > 100) {
      progress = 0;
    } else {
      const diff = Math.random() * 10;
      progress += diff;
    }

    // Calculate the buffer to match progress
    buffer = Math.min(progress, 100);

    // Update the progress and buffer bars
    const progressBar = document.getElementById('progress-bar');
    const bufferBar = document.getElementById('buffer-bar');

    progressBar.style.width = `${Math.min(progress, 100)}%`;
    bufferBar.style.width = `${Math.min(buffer, 100)}%`;

    // Adjust the buffer-bar position to create the gap
    bufferBar.style.left = `-${Math.min(10, Math.max(0, (100 - buffer) / 100 * progressBar.clientWidth - 10))}px`;
  }

  setInterval(updateProgress, 500);
});