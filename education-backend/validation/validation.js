const { check } = require('express-validator');
 
exports.signupValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('businessname', 'Name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 100 }),
    check('contact', 'Name is requied').not().isEmpty(),
    check('categories', 'Name is requied').not().isEmpty(),
    check('gstin', 'Name is requied').not().isEmpty(),
    check('businessaddress', 'Name is requied').not().isEmpty(),
]

exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 100 })

]