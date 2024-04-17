const UserSchema = require("../db/user.schema");
const FileService = require("./file.service");

class AuthService {
  async registerService(dto) {
    try {
      const { name, email, password, date_birth, gender, img } = dto;
      await FileService.createFile(img);
      const user = UserSchema({
        name,
        email,
        password,
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
    }
  }
}

module.exports = new AuthService();
