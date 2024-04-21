const UserSchema = require('../db/user.schema');
const logger = require('../../logger');

class UserService {
    async listUsersService(id) {
        logger.debug(`[START] UserService listUsersService params id: ${id}`);
        try {
            const usersList = await UserSchema.find({}).select(
                '-password -__v -gender -email',
            );
            const result = usersList.filter(
                (element) => String(element._id) !== id,
            );
            return result;
        } catch (error) {
            console.error('[ERROR] UserService listUsersService error', error);
            throw error;
        }
    }

    async finOneUserService(id) {
        logger.debug(`[START] UserService finOneUserService params id: ${id}`);
        try {
            const user = await UserSchema.find({ _id: id }).select('-__v');
            return user;
        } catch (error) {
            console.error('[ERROR] UserService finOneUserService error', error);
            throw error;
        }
    }
}

module.exports = new UserService();
