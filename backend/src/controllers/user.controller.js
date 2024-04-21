const { listUsersService, finOneUserService } = require('../service/user.service');
const logger = require('../../logger');
const apiError = require('../error/api.error');

class UserController {
    async list(req, res, next) {
        logger.info(`[START] UserController list`)
        try {
            const { id } = req.params;
            const user = await listUsersService(id)
            res.status(200).json({
                message: 'success',
                data: user,
            });
        } catch (error) {
            console.log('UserController list error', error);
            next(error);
        }
    }

    async finOne(req, res, next){
        logger.info(`[START] UserController finOne`)
        try {
            const { id } = req.params;
            const user = await finOneUserService(id)
            res.status(200).json({
                message: 'success',
                data: user,
            });
        } catch (error) {
            console.log('UserController finOne error', error);
            next(error);
        }
    }
}

module.exports = new UserController();
