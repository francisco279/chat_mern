const express          = require('express');
const { registerUser, 
        authUser }     = require('../controllers/userControllers');

const router = express.Router();
//main route user
router.post('/', registerUser);
//login
router.post('/login', authUser);

module.exports = router;
