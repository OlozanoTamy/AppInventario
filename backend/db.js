// db.js
import { createConnection } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER, 
password: process.env.DB_PASSWORD ,
database: process.env.DB_NAME ,    
port: process.env.DB_PORT                                                                                                         
});
console.log(process.env.DB_HOST);
connection.connect(err => {
  if (err) {
   console.error('Error de conexión:', err);
  } else {
    console.log('Conectado a RDS MySQL');
  }
});

export default connection;
