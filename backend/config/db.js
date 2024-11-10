import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Enable dotenv
dotenv.config();

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE);

    const url = `${db.connection.host}:${db.connection.port}`;

    console.log(url);

  } catch(error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;