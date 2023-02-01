const express          = require('express');
const { registerUser, 
        authUser, 
        allUsers}      = require('../controllers/userControllers');
const protect          = require('../middleware/authMiddleware');

const router = express.Router(); 

router.post('/',               registerUser); //main route user
router.post('/login',          authUser); //login
router.get('/',       protect, allUsers); //all users (protect = middleware to authenticate)

module.exports = router;
