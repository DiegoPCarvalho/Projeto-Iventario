const { Router } = require('express');
const router = Router();
const { signUp, signIn, renderSignIn, renderSignUp } = require('../controllers/usersController');

router.get('/users/signIn', renderSignIn);
router.get('/users/signUp', renderSignUp );
router.post('/users/signUp', signUp);
router.post('/users/signIn', signIn);

module.exports = router;