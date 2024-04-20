const {
    registerService,
    loginService,
    updateAccountService,
    findUser,
} = require('../service/auth.service');
const logger = require('../../logger');
const apiError = require('../error/api.error');

class AuthController {
    async register(req, res, next) {
        const { name, email, password, date_birth, gender } = req.body;
        const { img } = req.files;
        console.log('req.files', req.files);
        logger.info(`[START] AuthController register, params:
        name: ${name}, 
        email: ${email}, 
        password: ${password}, 
        date_birth: ${date_birth}, 
        gender: ${gender} 
        img: ${img.name}`);
        try {
            const user = await findUser(email);
            if (user) {
              logger.warn(`[WARN] AuthController register The user already exists`);
              return next(apiError.UserAlreadyExists());
            }
            const createAuth = await registerService({
                name,
                email,
                password,
                date_birth,
                gender,
                img,
            });
            if (!createAuth) {
                logger.warn(`[WARN] AuthController Register user`);
                return res.status(400).json({
                    message: 'Something went wrong during registration',
                });
            }
            logger.info(`[SUCCESS] AuthController Register user`);
            res.status(200).json({
                message: 'success',
            });
        } catch (error) {
            console.error('[ERROR] AuthController register error', error);
            next(error);
        }
    }

    async login(req, res, next) {
        logger.info('[START] AuthController login');
        try {
            const { email, password } = req.body;
            const login = await loginService({ email, password });
            if (!login) {
                logger.warn('[WARN] AuthController login');
                return res.status(404).json({
                    message: 'Something went wrong when Authorization',
                });
            }
            logger.info('[SUCCESS] AuthController login');
            res.status(200).json({
                message: 'Authorization was successful',
            });
        } catch (error) {
            console.error('[ERROR] AuthController login error', error);
            next(error);
        }
    }

    async updateAccount(req, res, next) {
        logger.info('[START] AuthController updateAccount');
        try {
            const { id } = req.params;
            const { name, password } = req.body;
            const img = req.files === null ? '' : req.files.img;
            const updateProfile = await updateAccountService(id, {
                name,
                password,
                img,
            });
            if (!updateProfile) {
                logger.warn('[WARN] AuthController updateAccount');
                return res.status(404).json({
                    message: 'Something went wrong when update Account',
                });
            }
            logger.info('[SUCCESS] AuthController updateAccount');
            res.status(200).json({
                message: 'success',
            });
        } catch (error) {
            console.error('[ERROR] AuthController updateAccount error', error);
            next(error);
        }
    }
}

module.exports = new AuthController();
