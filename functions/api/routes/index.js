const express = require('express');
const router = express.Router();

router.use('/character', require('./character'));
router.use('/result', require('./result'));

module.exports = router;
