// src/controllers/authController.js
const bcrypt = require('bcrypt');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:cupcake@localhost:5432/discover';
const db = new Client({ connectionString });
db.connect();

exports.register = async (req, res) => {
  try {
    const { username, password, password_confirm } = req.body;

    if (password !== password_confirm) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const query = 'INSERT INTO users (username, password, is_ambassador) VALUES ($1, $2, $3) RETURNING *';
    const values = [username, hashedPassword, false];
    const result = await db.query(query, values);
    const user = result.rows[0];

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
