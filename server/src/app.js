const express = require('express');
require('./database/config');

const otpRouter = require('./routes/otp/otp');
const userRoutes = require('./routes/users/users');

const allRoutes = express.Router();

allRoutes.use('/otp', otpRouter);
allRoutes.use('/users', userRoutes);

module.exports = allRoutes;