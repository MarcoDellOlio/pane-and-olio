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
    const searchWord = req.body.result.parameters.name[0]

    if (!!searchWord) {
      pusher.trigger('my-channel', 'my-event', {
        'searchWord': searchWord
      });
    }
  })

module.exports = router