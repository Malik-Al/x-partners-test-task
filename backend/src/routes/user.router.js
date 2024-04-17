const Router = require('express');
const router = new Router();
const { list } = require('../controllers/user.controller');

router.get('/', list);




module.exports = router;