import express from 'express';
import connectDB from './config/db.js';
import veterinanRoutes from './routes/veterinarianRoutes.js';
import patientRoutes from './routes/patientRoutes.js'

const app = express();
connectDB();

// Allows to parse request bodies
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/api/veterinarians', veterinanRoutes);
app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
  console.log('Servidor Funcionando');
});