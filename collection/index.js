const mongoose = require('mongoose');

class Collection {
  static Production() {
    return new mongoose.Schema({
      url: { type: String },
      tag: { type: Array, default: [] },
      expand: { type: String, default: '' },
      title: {
        type: String,
        default: `${new Date().getFullYear()}-${new Date().getMonth + 1}-${new Date().getDate()} 上传`,
      },
      info: { type: String, default: '' },
      creatTime: { type: Number, default: new Date().valueOf() },
    });
  }

  static Review() {
    return new mongoose.Schema({
      url: { type: String },
      tag: { type: Array, default: [] },
      expand: { type: String, default: '' },
      title: {
        type: String,
        default: `${new Date().getFullYear()}-${new Date().getMonth + 1}-${new Date().getDate()} 上传`,
      },
      info: { type: String, default: '' },
      isPass: { type: Boolean, default: false },
      isDrop: { type: Boolean, default: false },
    });
  }
}

module.exports = Collection;
