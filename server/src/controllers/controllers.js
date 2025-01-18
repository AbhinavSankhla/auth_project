//User Controllers
const registerUser = require('./user/registerUser')
const readUser = require('./user/readUser')
const deleteUser = require('./user/deleteUser')

//OTP Controller
const otpGenerator = require('./otp/otpGenerator')

module.exports = {
    otpGenerator,
    registerUser,
    readUser,
    deleteUser
}
