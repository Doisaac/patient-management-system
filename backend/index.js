import express from 'express';
import conectarDB from './config/db.js';

const app = express();
conectarDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Servidor Funcionando');
});