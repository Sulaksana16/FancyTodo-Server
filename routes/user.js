const router = require('express').Router()
const User = require('../controllers/user')

router.post('/register', User.register)
router.post('/login', User.login)
router.post('/google', User.googleSignIn)


module.exports = router