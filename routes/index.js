var express = require('express');
var router = express.Router();

const { QiNiu } = require('../engine');
const Mongo = require('../utils/Mongo');

const { Production, Review } = Mongo;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/token', (req, res) => {
  const token = QiNiu.getToken();
  res.send(token);
});

router.get('/fetchPic', (req, res) => {
  Production.find()
    .then((doc) => {
      res.send({ status: 0, data: doc });
    })
    .catch((err) => {
      res.send({ status: 1 });
    });
});

router.get('/fetchIndexPic', (req, res) => {
  Production.findById('60e481ee2d0a664a58df8c6c')
    .then((doc) => {
      res.send({ status: 0, data: doc });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 1 });
    });
});

router.get('/fetchUploadPic', (req, res) => {
  Production.findById('60e48229d7256049fc227778')
    .then((doc) => {
      res.send({ status: 0, url: doc.url });
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 1 });
    });
});

router.post('/uploadArticle', (req, res) => {
  const { url, title, tag, info, expand } = req.body;
  const data = {
    url,
    title,
    tag: tag.split(' '),
    info,
    expand,
  };
  Production.create(data, (err, doc) => {
    if (err) {
      console.log('failed');
      res.send({ status: 1 });
      return;
    }
    console.log(doc);
    res.send({ status: 0 });
  });
});

router.get('/test', (req, res) => {
  // const data = {
  //   url: 'http://pic.syustudio.club/72a06c2f506342d7aa0ab2c26eec279a1625325024868.jpg',
  //   title: '沈阳大学2019年的春天',
  //   tag: ['沈阳大学', '季节'],
  //   info: '春天的脚步',
  // };
  // Production.findById('60e08e4e80202820245b28e5', (err, doc) => {
  //   const expand = doc.expand[0].split(' ');
  //   console.log(expand);
  //   // Production.updateOne({ _id: '60e08e4e80202820245b28e5' }, { expand }, (err, doc) => {
  //   //   console.log(err);
  //   //   console.log(doc);
  //   // });
  // });
  // Production.findById('60e087c2f0cfb03f20f881b0', (err, doc) => {
  //   const tag = doc.tag.split(' ');
  //   // Production.updateOne({ _id: '60e087c2f0cfb03f20f881b0' }, { tag });
  // });
  // const data = {
  //   url: 'http://pic.syustudio.club/7baef7652df341798934cecd649528131625294947115.jpg',
  //   title: '17级通信工程二班毕业照',
  //   tag: ['毕业照', '操场'],
  //   info: '2021年6月4日，我们毕业了!',
  // };
  // Production.create(data, (err, doc) => {
  //   if (err) {
  //     console.log('failed');
  //     return;
  //   }
  //   console.log(doc);
  // });
  // Production.updateOne(
  //   { _id: '60e0582757e34214449c1651' },
  //   { url: 'http://pic.syustudio.club/8e4e11b342b84bb38f8f4bbdf9b736101625315691517.jpg' }
  // )
  //   .then((doc) => {
  //     console.log(doc);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

module.exports = router;
