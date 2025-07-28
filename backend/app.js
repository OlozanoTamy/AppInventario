import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
//Importa los ruteadores
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(json());

app.use('/api', authRoutes);
app.use('/api/usuarios', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);  });

app.get("/",(req, res) => {
  res.send("¡Bienvenido al backend de Inventario!"); 
});
