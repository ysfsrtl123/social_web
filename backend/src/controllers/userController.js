import express from 'express';
import path from 'path';
const app = express();  // app'i doğru şekilde başlatın



export const getHome = (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
};

