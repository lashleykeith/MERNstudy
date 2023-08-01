// index.js
const express = require('express');
const app = express();

// Database connection
const { Client } = require('pg');
const connectionString = 'postgres://postgres:cupcake@localhost:5432/discover';
const db = new Client({ connectionString });
db.connect();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
const routes = require('./src/routes/routes');
app.use('/api', routes);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
