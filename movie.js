
// Simulate that the username is already captured (for example, from a form or login)
let userName = "Sakshi";  // Replace with the actual username captured dynamically

// Get the element where the welcome message is displayed
const welcomeMessage = document.getElementById('welcome-message');

// Update the welcome message with the user's name
welcomeMessage.textContent = `Welcome to Movie Zone, ${userName}!`;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Placeholder database (for demonstration)
let theaters = [];
let movies = [];

// Endpoint for movie theater owners to sign up
app.post('/signup', (req, res) => {
    const { theater_name, owner_name, email, password } = req.body;
    theaters.push({ theater_name, owner_name, email, password });
    res.send('Theater owner signed up successfully!');
});

// Endpoint to list movies
app.post('/list-movie', (req, res) => {
    const { movie_title, genre, showtimes, theater_name } = req.body;
    movies.push({ movie_title, genre, showtimes, theater_name });
    res.send('Movie listed successfully!');
});

// Endpoint to get movies by theater
app.get('/movies/:theater', (req, res) => {
    const theaterName = req.params.theater;
    const theaterMovies = movies.filter(movie => movie.theater_name === theaterName);
    res.json(theaterMovies);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
