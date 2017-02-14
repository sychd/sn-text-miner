const express = require('express');
const router = express.Router();
const dbManager = require('../db/dbManager');
const CLIENT_URL = 'http://localhost:4200';

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", CLIENT_URL);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/groups', (req, res) => {
  console.log('post groups', req.body);
  res.header('Access-Control-Allow-Origin', '*');
  res.send();
});

module.exports = router;
