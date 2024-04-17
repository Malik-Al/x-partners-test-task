const UserSchema = require("../db/user.schema");
const FileService = require("./file.service");
const bcrypt = require("bcrypt");
const apiError = require('../error/api.error');

class AuthService {
  async registerService(dto) {
    try {
      const { name, email, password, date_birth, gender, img } = dto;
      await FileService.createFile(img);
      const hashPassword = await bcrypt.hash(password, 5);
      const user = UserSchema({
        name,
        email,
        password: hashPassword,
        date_birth,
        gender,
        img: img.name,
      });

      const create = await user.save();
      if (!create._id) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  async loginService(dto) {
    try {
      const { email, password } = dto;
      const user = await UserSchema.find({ email: email });
      if(!user[0]) throw apiError.badRequest(`Пользователь не найден`);

      const isPassEquals = await bcrypt.compare(password, user[0].password);
      if (!isPassEquals) throw apiError.badRequest(`Неверный пароль`);

      return user[0];
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
}

module.exports = new AuthService();
