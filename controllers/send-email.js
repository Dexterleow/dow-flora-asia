const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.load();
const router = express.Router();

router.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.emailAdd,
      pass: process.env.emailPass
    }
  });

  let mailOptions = {
    from: '"No Reply Dow Flora" <noreplydowflora@gmail.com>', // sender address
    to: 'eugeneoei89@gmail.com', // list of receivers
    subject: 'Enquiry from ' + req.body.email, // Subject line
    html: `Hi Dow Flora,<br><br>You have an enquiry from ${req.body.name}.<br><br>
    His/Her enquiry is as follows:<br><br>
    ${req.body.message}<br><br>
    Please reply him/her at ${req.body.email} as soon as possible.<br><br>
    Thank you,<br>
    No Reply Dow Flora`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({'status': false});
      return;
    } else {
      res.json({'status': true});
    }
  });

});

module.exports = router;
