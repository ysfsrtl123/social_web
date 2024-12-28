const express = require('express');
const path = require('path');  // path modülünü ekleyin
const app = express();  // app'i doğru şekilde başlatın

// Home route
exports.getHome = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
};





module.exports = router;
