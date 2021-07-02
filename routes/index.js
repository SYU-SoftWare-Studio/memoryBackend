var express = require('express');
var router = express.Router();

const { QiNiu } = require('../engine');
const Mongo = require('../utils/Mongo');

const { Production } = Mongo;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/token', (req, res) => {
  const token = QiNiu.getToken();
  res.send(token);
});

router.get('/test', (req, res) => {
  const data = {
    url: '23123',
    name: 'test',
    tag: ['412', '406'],
    classify: '412Club',
    info: '12222222222',
  };
  Production.create(data, (err, doc) => {
    if (err) {
      console.log('failed');
      return;
    }
    console.log(doc);
  });
});

module.exports = router;
