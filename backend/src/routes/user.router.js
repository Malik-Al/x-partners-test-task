const Router = require('express');
const router = new Router();
const { list, finOne } = require('../controllers/user.controller');

router.get('/:id', list);
router.get('/user/:id', finOne);





module.exports = router;