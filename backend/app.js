//Importar las dependencias necesarias
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db.js';
// Cargar las variables de entorno desde el archivo .env 
//Esencial para que las contraseñas y configuraciones sensibles no estén en el código fuente
dotenv.config();
// Crear una instancia de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;
// Configurar middleware
// CORS permite que el servidor acepte solicitudes de diferentes orígenes
app.use(cors());
app.use(express.json());
// Configurar la ruta raíz
app.get('/', (req, res) => {
  res.send('Hola Mundo! Bienvenido a la API de AppInventario');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


app.get('/test-db', (req, res) => {
  connection.query('SELECT NOW()', (err, results) => {
    if (err) {
      return res.status(500).send('Error con la base de datos');
    }
    res.json(results);
  });
});
