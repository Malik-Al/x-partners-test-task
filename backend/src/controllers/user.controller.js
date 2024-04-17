class UserController {
    async list(req, res, next) {
        try {
        res.status(200).json({
            message: 'список',
            data: [],
        });
        } catch (error) {
            console.log('error', error);
            next(error);
        }
    }
}

module.exports = new UserController();