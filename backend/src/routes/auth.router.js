const Router = require('express');
const router = new Router();
const { register, login, updateAccount } = require('../controllers/auth.controller');

router.post(
    '/sing-up', 
    register,
);
router.post('/sing-in', login);
router.post('/account', updateAccount);






module.exports = router;