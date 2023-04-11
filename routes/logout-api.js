const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  req.session = null;
  res.json({result: "success"});
});

module.exports = router;
