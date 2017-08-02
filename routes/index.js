const express = require('express');
// const app = express();
const router = express.Router();
const tweetBank = require('../tweetBank.js')

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  
  var name = req.params.name;
  //et tweets = tweetBank.list();
  tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets, name: name} );
});

module.exports = router;