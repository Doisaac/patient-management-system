import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import veterinanRoutes from './routes/veterinarianRoutes.js';
import patientRoutes from './routes/patientRoutes.js'

const app = express();
connectDB();

const allowedDomains = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1){
      // The origin is allowed
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

app.use(cors(corsOptions));

// Allows to parse request bodies
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/api/veterinarians', veterinanRoutes);
app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
  console.log('Servidor Funcionando');
});