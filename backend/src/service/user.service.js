const UserSchema = require('../db/user.schema');
const logger = require('../../logger');

class UserService {
    async listUsersService(id) {
        logger.debug(`[START] UserService listUsersService params id: ${id}`)
        try {
            const usersList = await UserSchema.find({}).select(
                '-password -__v -gender -email',
            );
            const result = usersList.filter((element) => String(element._id) !== id);
            return result;
        } catch (error) {
            console.error('[ERROR] UserService listUsersService error', error);
            throw error
        }
    }
}

module.exports = new UserService();
