/**
 * Created by lenovo on 2018/11/29.
 */
const dbUtils = require('./../utils/db-utils');
const user = {
    async getOneByUserNameAndPassword(options) {
        let _sql = `SELECT * from user where password="${options.password}" and username="${options.username}" limit 1`;
        let result = await dbUtils.query(_sql);
        if (Array.isArray(result) && result.length > 0) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },
    async postOneByUserNameAndPassword(opt) {
        let result = await dbUtils.insertData('user', opt);
        return result;
    },
    async getUserById(id) {
        let result = await dbUtils.findDataById('user', id);
        return result[0];
    }
};
module.exports = user;
