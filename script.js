document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get user input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Define correct username and password
        const correctUsername = 'user';
        const correctPassword = '123';

        // Check if the provided credentials match the correct ones
        if (username === correctUsername && password === correctPassword) {
            // Redirect to next.html if the credentials are correct
            window.location.href = 'next.html';
        } else {
            // Optionally, alert the user if the credentials are incorrect
            alert('Incorrect username or password. Please try again.');
        }
    });
});
