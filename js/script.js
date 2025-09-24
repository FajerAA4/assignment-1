// Dark/Light Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Greeting message based on time of day
window.onload = function () {
    const greetText = document.getElementById("greet-text");
    const hour = new Date().getHours();

    if (hour < 12) {
        greetText.textContent = "Good Morning! 🌅 ";
    } else if (hour < 18) {
        greetText.textContent = "Good Afternoon! ☀️";
    } else {
        greetText.textContent = "Good Evening! 🌙 ";
    }
};
