const express = require('express')
const router = express.Router(({ mergeParams: true }))
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    router.post('/:phoneNumber', (req, res) => {
        list = req.body.groceryList.map(product => `\n* ${product.name}`).join(" ")
        stores = req.body.groceryStores.map(store => `\n${store.name} \n${store.vicinity} \n`).join(" ")
        client.messages.create({
            to: `+1${req.params.phoneNumber}`,
            from: '+17062045793',
            body: `PANE & OLIO \n
                    Grocery list: 
                    ${list} 
                    Closest stores: 
                    \n${stores}
                    \nThank you for using my app!
                    \nVisit my website www.marcodellolio.com
                    \nor send an email to dellolio.marco@gmail.com
                    `

        })
        .then((message) => {
            console.log(message.sid)
            res.status(200)
        });
    })

    



module.exports = router