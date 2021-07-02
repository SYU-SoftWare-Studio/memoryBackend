const mongoose = require('mongoose');
const Collection = require('../collection');

const URL = 'mongodb://106.13.219.249:27017/memory';

mongoose.connect(URL);

const db = mongoose.connection;

db.on('open', (err) => {
  if (err) {
    console.log('Connect Failed');
    throw err;
  }
  console.log('Connect Success');
});

const Production = mongoose.model('production', Collection.Production());

module.exports = {
  Production,
};
