const express = require('express');
const { registerUser, readUser} = require('../../controllers/controllers');

const userRoutes = express.Router();

userRoutes.post('/register_user',registerUser);
userRoutes.post('/read_user',readUser);

module.exports = userRoutes;