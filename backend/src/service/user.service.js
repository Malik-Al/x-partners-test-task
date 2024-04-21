const UserSchema = require('../db/user.schema');
const logger = require('../../logger');

class UserService {
    async listUsersService() {
        logger.debug(`[START] UserService listUsersService`);
        try {
            const usersList = await UserSchema.find().select('-__v');
            return usersList;
        } catch (error) {
            console.error('[ERROR] UserService listUsersService error', error);
            throw error;
        }
    }
}

module.exports = new UserService();
