
// Simulate that the username is already captured (for example, from a form or login)
let userName = "Sakshi";  // Replace with the actual username captured dynamically

// Get the element where the welcome message is displayed
const welcomeMessage = document.getElementById('welcome-message');

// Update the welcome message with the user's name
welcomeMessage.textContent = `Welcome to Movie Zone, ${userName}!`;
