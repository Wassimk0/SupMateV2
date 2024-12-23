// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0


// Function to apply dark mode class based on localStorage
function applyDarkMode() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

// Function to apply the direction based on localStorage
function applyDirection() {
    const direction = localStorage.getItem("direction") || "ltr";
    document.querySelector("html").dir = direction;
}

function toggleThemeMode () {
    const darkMode = localStorage.getItem("darkMode");
    localStorage.setItem("darkMode", darkMode === "true" ? "false" : "true");
    applyDarkMode();
};

function toggleDirection() {
    // Toggle 'dir' attribute on <html> tag
    const htmlElement = document.querySelector("html");
    localStorage.setItem("direction", htmlElement.dir === "ltr" ? "rtl" : "ltr");
    applyDirection();
}

// Wait for the DOM to be fully loaded
export default function initTheme() {
    // Apply the correct dark mode on page load
    applyDarkMode();

    // Apply the correct direction on page load
    applyDirection();

    // Get the button element
    const toggleDirectionButton = document.getElementById("toggleDirectionButton");
    const darkModeToggle = document.querySelector("#darkModeToggle");

    // Add click event listener to the button
    if (toggleDirectionButton) toggleDirectionButton.onclick = toggleDirection;
    if (darkModeToggle) darkModeToggle.onclick = toggleThemeMode;
}