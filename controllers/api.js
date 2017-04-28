// Get dependencies
const express = require('express');
const router = express.Router();

// ROOT
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;
