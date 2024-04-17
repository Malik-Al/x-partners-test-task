const Router = require('express');
const router = new Router();
const userRouter = require('./user.router');
const authRouter = require('./auth.router');


router.use('/', authRouter);
router.use('/people', userRouter);


module.exports = router;