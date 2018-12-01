/**
 * Created by lenovo on 2018/11/29.
 */
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const fs = require('fs');
const path = require('path');
const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'));

const user = {
  async signIn( formData ) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      password: formData.password,
      username: formData.username});
    return resultData
  },

  async getToken(formData) {
    let jwtStr = jwt.sign({
      username: formData.username,
      userId: formData.id,
      type: config.type,
      service: config.service,
    }, publicKey, { expiresIn: '168h' });
    return jwtStr
  },
  async register(formData) {
    let resultData = await userModel.getOneByUserNameAndPassword(formData);
    if(resultData !== null) return null;

    resultData = await userModel.postOneByUserNameAndPassword(formData);
    return resultData
  }
};
module.exports = user;
