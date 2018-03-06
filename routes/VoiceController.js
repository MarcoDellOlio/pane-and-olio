const express = require('express')
const router = express.Router()
const Pusher = require('pusher');


const pusher = new Pusher({
    appId: '486948',
    key: '4cb22b1b0d97095c5f2a',
    secret: 'cde18df538e9abe6f4ef',
    cluster: 'us2',
    encrypted: true
  });


  router.post('/', (req,res) => {
    console.log(req.body)

    // pusher.trigger('my-channel', 'my-event', {
    //     "message": "hello world"
    //   });
    
    res.json({yes : "no"})
  })
  
  


module.exports = router