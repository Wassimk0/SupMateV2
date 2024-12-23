// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



// Select all heart icons
var hearts = document.querySelectorAll('.rating-heart > i');

// Add event listeners for mouseover
hearts.forEach(function(heart) {
  heart.addEventListener('mouseover', function() {
    var hoveredIndex = Array.from(hearts).indexOf(heart);
    
    // Remove 'ri-heart-line' and add 'ri-heart-fill' for filled hearts
    for (var i = 0; i <= hoveredIndex; i++) {
      hearts[i].classList.remove('ri-heart-line');
      hearts[i].classList.add('ri-heart-fill');
    }
    // Add 'ri-heart-line' for empty hearts
    for (var j = hoveredIndex + 1; j < hearts.length; j++) {
      hearts[j].classList.remove('ri-heart-fill');
      hearts[j].classList.add('ri-heart-line');
    }
  });
});

// Add event listener for click
hearts.forEach(function(heart) {
  heart.addEventListener('click', function() {
    var clickedIndex = Array.from(hearts).indexOf(heart);
    
    // Toggle 'active' class on clicked heart
    heart.classList.toggle('active');
  });
});

// Add event listener for mouseleave
document.querySelector('.rating-heart').addEventListener('mouseleave', function() {
  var activeIndex = Array.from(hearts).findIndex(function(h) {
    return h.classList.contains('active');
  });
  
  // Restore hearts to their 'active' state
  for (var i = 0; i <= activeIndex; i++) {
    hearts[i].classList.remove('ri-heart-line');
    hearts[i].classList.add('ri-heart-fill');
  }
  for (var j = activeIndex + 1; j < hearts.length; j++) {
    hearts[j].classList.remove('ri-heart-fill');
    hearts[j].classList.add('ri-heart-line');
  }
});



// Select all heart icons
var stars = document.querySelectorAll('.rating-star > i');

// Add event listeners for mouseover
stars.forEach(function(star) {
  star.addEventListener('mouseover', function() {
    var hoveredIndex = Array.from(stars).indexOf(star);
    
    // Remove 'ri-star-line' and add 'ri-star-fill' for filled stars
    for (var i = 0; i <= hoveredIndex; i++) {
      stars[i].classList.remove('ri-star-line');
      stars[i].classList.add('ri-star-fill');
    }
    // Add 'ri-star-line' for empty stars
    for (var j = hoveredIndex + 1; j < stars.length; j++) {
      stars[j].classList.remove('ri-star-fill');
      stars[j].classList.add('ri-star-line');
    }
  });
});

// Add event listener for click
stars.forEach(function(star) {
  star.addEventListener('click', function() {
    var clickedIndex = Array.from(stars).indexOf(star);
    
    // Toggle 'active' class on clicked star
    star.classList.toggle('active');
  });
});

// Add event listener for mouseleave
document.querySelector('.rating-star').addEventListener('mouseleave', function() {
  var activeIndex = Array.from(stars).findIndex(function(h) {
    return h.classList.contains('active');
  });
  
  // Restore stars to their 'active' state
  for (var i = 0; i <= activeIndex; i++) {
    stars[i].classList.remove('ri-star-line');
    stars[i].classList.add('ri-star-fill');
  }
  for (var j = activeIndex + 1; j < stars.length; j++) {
    stars[j].classList.remove('ri-star-fill');
    stars[j].classList.add('ri-star-line');
  }
});
