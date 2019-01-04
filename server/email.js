const nodemailer = require('nodemailer');

 var send_mail = (emailid) =>
 {
   var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'Admin Mail ID',
      pass: 'password'
    }
  });
  
  var mailOptions = {
    from: 'Admin Mail ID',
    to: `${emailid}`,
    subject: 'File From PRIMEWARE',
    text: 'Deatils of VM',
    attachments: [
      {
        path: 'details.csv'
      }
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 }

 var send_mail_performace = (emailid) =>
 {
   var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'Admin Mail ID',
      pass: 'password'
    }
  });
  //Allow less secure apps to access account
  //use this to access the mail account
  var mailOptions = {
    from: 'Admin Mail ID',
    to: `${emailid}`,
    subject: 'File From PRIMEWARE',
    text: 'performance of VM',
    attachments: [
      {
        path: 'AverageUsage.csv'
      }
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 }
module.exports.vm = send_mail;
module.exports.perform = send_mail_performace;
