//User Controllers
const registerUser = require('./user/registerUser')
const readUser = require('./user/readUser')

//OTP Controller
const otpGenerator = require('./otp/otpGenerator')

module.exports = {
    otpGenerator,
    registerUser,
    readUser
}
