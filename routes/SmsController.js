const express = require('express')
const router = express.Router(({ mergeParams: true }))
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    router.post('/:phoneNumber', (req, res) => {
        console.log(req.params.phoneNumber)
        list = req.body.map(product => product.name).join(", ")
        console.log(list)
        client.messages.create({
            to: `+1${req.params.phoneNumber}`,
            from: '+17062045793',
            mediaUrl: 'https://i.imgur.com/V8Jxe3D.jpg',
            body: `PANE & OLIO grocerylist:${list}`
        })
        .then((message) => console.log(message.sid));
    })

    



module.exports = router