const { registerService, loginService, updateAccountService } = require("../service/auth.service");

class AuthController {
  async register(req, res, next) {
    try {
      const { name, email, password, date_birth, gender } = req.body;
      const { img } = req.files;
      const createAuth = await registerService({
        name,
        email,
        password,
        date_birth,
        gender,
        img,
      });
      if (!createAuth) {
        return res.status(400).json({
          message: "Что то пошло не так при регистраций",
        });
      }
      res.status(200).json({
        message: "success",
        data: [],
      });
    } catch (error) {
      console.log("register error", error);
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const login = await loginService({email, password})
      if(!login){
        return res.status(404).json({
          message: "Something went wrong when Authorization",
        });
      }
      res.status(200).json({
        message: "Authorization was successful",
      });
    } catch (error) {
      console.log("login error", error);
      next(error);
    }
  }

  async updateAccount(req, res, next) {
    try {
      const { id } = req.params;
      const { name, password } = req.body;
      const { img } = req.files;

      const updateProfile = await updateAccountService(id, {name, password, img})
      if(!updateProfile){
        return res.status(404).json({
          message: "Something went wrong when update Account",
        });
      }
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      console.log("updateAccount error", error);
      next(error);
    }
  }
}

module.exports = new AuthController();
