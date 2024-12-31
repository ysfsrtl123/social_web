import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; // Eksik import

import { sequelize } from './config/db.js'; // Sequelize bağlantısı

const app = express();

// ES Modüllerinde __filename ve __dirname elde etmek için
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env dosyasını yükle
dotenv.config({ path: './config/.env' });

// CORS kullanımı
app.use(cors());

// Frontend build dizini statik olarak sunuluyor
app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));

// Veritabanı bağlantısını kontrol et
sequelize.authenticate()
  .then(() => {
    console.log('Veri tabanına başarıyla bağlanıldı.');
  })
  .catch(err => {
    console.error('Veri tabanı bağlantı hatası:', err);
  });

  

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
