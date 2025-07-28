import { hash } from 'bcrypt';
import db from './db.js';

const crearUsuarioAdmin = async () => {
  const nombre = 'Admin';
  const correo = 'oscar.lozano@grupooet.com';
  const password = 'mp%vLEaV%5'; // Cambia esto por la contraseña que desees
  const rol = 1; // Ajusta según tu sistema de roles

  try {
    const contrasenaHash = await hash(password, 10);
    const query = 'INSERT INTO usuarios (nombre, correo, password, rol) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, correo, contrasenaHash, rol], (err, result) => {
      if (err) {
        console.error('Error al crear el usuario admin:', err);
      } else {
        console.log('Usuario admin creado correctamente con id:', result.insertId);
      }
      db.end();
    });
  } catch (err) {
    console.error('Error al hashear la contraseña:', err);
    db.end();
  }
};

crearUsuarioAdmin();