class AuthController {
    async register(req, res, next) {
        try {
        res.status(200).json({
            message: 'список',
            data: [],
        });
        } catch (error) {
            console.log('register error', error);
            next(error);
        }
    }

    async login(req, res, next) {
        try {
        res.status(200).json({
            message: 'login',
            data: [],
        });
        } catch (error) {
            console.log('login error', error);
            next(error);
        }
    }
    async updateAccount(req, res, next) {
        try {
            res.status(200).json({
                message: 'updateAccount',
                data: [],
            });
            } catch (error) {
                console.log('updateAccount error', error);
                next(error);
            }
    }
}

module.exports = new AuthController();