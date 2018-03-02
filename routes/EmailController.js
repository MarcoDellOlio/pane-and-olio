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
        list = req.body.groceryList.map(product => `<br/> * ${product.name}`).join(" ")
        stores = req.body.groceryStores.map(store => `<br/>${store.name} <br/>${store.vicinity} <br/>`).join(" ")
        const mailOptions = {
            from: process.env.GMAIL_ADDRESS, // sender address
            to: req.params.emailaddress, // list of receivers
            subject: 'Pane & Olio: your grocery list', // Subject line
            html: `<h2>Pane & Olio</h2>
                    <h3>Grocery list:</h3>
                    ${list} <br/>
                    <h3>Closest stores:</h3>
                    ${stores}
                    <br/>
                    <br/>
                    <h4>Thank you for using my app!</h4>
                    <h5>For more info</h5>
                    <h5>Visit my website www.marcodellolio.com</h5>
                    <h5>or reply to this email</h5>

            `
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if(err){
              console.log(err)
              res.json(err)
            }
            else{
              console.log(info);
              res.json(info)
            }
        });

    })

module.exports = router