const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.load();
const router = express.Router();

router.post('/', (req, res) => {
  console.log('inside send email api');
  console.log('see here for req.body', req.body);
  res.json({'status': true});

});

module.exports = router;
