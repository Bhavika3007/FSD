const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the table from REST API data
app.get('/', async (req, res) => {
    try {
        // Fetch data from a REST API
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Example API
        const users = response.data; // Assuming the data is an array

        // Render the data in the table
        res.render('index', { users });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
