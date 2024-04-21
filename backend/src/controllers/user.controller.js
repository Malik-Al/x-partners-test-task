const {
    listUsersService,
} = require('../service/user.service');
const logger = require('../../logger');

class UserController {
    async list(req, res, next) {
        logger.info(`[START] UserController list`);
        try {
            const user = await listUsersService();
            res.status(200).json({
                message: 'success',
                data: user,
            });
        } catch (error) {
            console.log('UserController list error', error);
            next(error);
        }
    }
}

module.exports = new UserController();
