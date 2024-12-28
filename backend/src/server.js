const express = require('express');
const app = express();
const http = require('http');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
app.use(cors());

// Frontend build dizini statik olarak sunuluyor
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));

// Ana sayfa için route ekleyin
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
});

// Diğer API rotaları buraya eklenebilir
// app.get('/api', (req, res) => { ... });

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
