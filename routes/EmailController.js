const express = require('express')
const router = express.Router(({ mergeParams: true }))
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD
        }
});




    router.post('/:emailaddress', (req, res) => {
        const mailOptions = {
            from: process.env.GMAIL_ADDRESS, // sender address
            to: req.params.emailaddress, // list of receivers
            subject: 'Pane & Olio grocery list', // Subject line
            html: '<p>This is a test Helloooooo</p>'// plain text body
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
        });
    })

module.exports = router