const path = require('path');
const conf = require('../../msdata/config.json');

class FileService {
    async createFile(file) {
        try {
            await file.mv(path.resolve(this.pathGenerateUrl(file.name)));
        } catch (error) {
            console.error('[ERROR] FileService createFile', error);
            throw error;
        }
    }

    pathGenerateUrl(fileName) {
        try {
            if (fileName)
                return path.resolve(
                    __dirname,
                    conf.folder.path,
                    conf.folder.name,
                    fileName,
                );
            return path.resolve(__dirname, conf.folder.path, conf.folder.name);
        } catch (error) {
            console.error('[ERROR] FileService pathGenerateUrl', error);
            throw error;
        }
    }
}

module.exports = new FileService();