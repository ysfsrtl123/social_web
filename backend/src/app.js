// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./routes/userRoutes'); // routes/index.js dosyasını kullanıyoruz

// Uygulama tanımlaması
const app = express();

// Middleware'ler
app.use(cors()); // Çapraz kaynak paylaşımı için
app.use(morgan('dev')); // HTTP isteği loglama
app.use(bodyParser.json()); // JSON formatındaki verileri işleme
app.use(bodyParser.urlencoded({ extended: true })); // URL encoded verileri işleme

// API rotaları
app.use('/api', apiRoutes);

// Statik dosyaları sunmak için (frontend build)
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;