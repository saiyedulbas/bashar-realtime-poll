const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');
const Pusher = require('pusher');
const keys = require('../config/keys');
var pusher = new Pusher({
  appId: '1020030',
  key: 'd26e913ee5b2f3dc94ba',
  secret: 'a8d1edd2aacf9394ad8d',
  cluster: 'mt1',
  encrypted: true
});
router.get('/', (req, res) => {
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  };
  
  new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
      points: parseInt(vote.points),
      os: vote.os
    });

    return res.json({ success: true, message: 'Thank you for voting' });
  });
});

module.exports = router;