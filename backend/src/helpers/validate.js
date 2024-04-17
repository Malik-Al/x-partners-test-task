class Validate {
  isName(name){
    const nameRegex = /^[a-zA-Z0-9-_ ]+$/;
    return nameRegex.test(name);
  }

  isEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isImg(img){
    if (!Array.isArray(img)) {
        return false;
      }
      for (const imageUrl of img) {
        if (typeof imageUrl !== 'string' || !imageUrl.startsWith('http://') || !imageUrl.startsWith('https://')) {
          return false;
        }
      }
      return true;
  }
}

module.exports = new Validate();
