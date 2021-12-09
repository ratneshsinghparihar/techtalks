var express = require('express');
var router = express.Router();
const fs=require('fs');

const mymem=[];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


 async function test(){
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 10000; j++) {
      let gg = 89 * 12000;
    }
  }
}

router.get('/data',async function (req, res, next) {
  const test1 = { "test": 1 }
  // await test();
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 10000; j++) {
      let gg = 89 * 12000;
    }
  }
  res.send(test1);
});

router.get('/mem',async function (req, res, next) {
  const test1 = { "test": 1 }
  const data=JSON.parse(fs.readFileSync("test2.json"));
  console.log(data && data.length);
  mymem.push(data);
  res.send(test1);
});


router.get('/iohdd',async function (req, res, next) {
  for (let i = 0; i < 10; i++) {
    const data=JSON.parse(fs.readFileSync("testsmall.json"));
  }
  const data=JSON.parse(fs.readFileSync("testsmall.json"));
  console.log(data && data.length);
  res.send(data);
});

router.get('/iossd',async function (req, res, next) {
  for (let i = 0; i < 10; i++) {
    const data=JSON.parse(fs.readFileSync("c:/test/testsmall.json"));
  }
  const data=JSON.parse(fs.readFileSync("c:/test/testsmall.json"));
  console.log(data && data.length);
  res.send(data);
});


module.exports = router;
