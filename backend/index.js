import express from 'express';
import connectDB from './config/db.js';

const app = express();
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Servidor Funcionando');
});