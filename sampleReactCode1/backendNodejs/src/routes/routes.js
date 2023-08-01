// src/routes/routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/admin/register', authController.register);

module.exports = router;
