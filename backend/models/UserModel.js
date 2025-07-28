import db from '../db.js';

// Consulta la base de datos para obtener un usuario por su correo
const getUserByCorreo = (correo) => {
  return new Promise((resolve, reject) => {
    if (!correo) {
      return reject(new Error('Correo no proporcionado'));
    }
    const query = 'SELECT * FROM usuarios WHERE correo = ?';
    db.query(query, [correo], (err, result) => {
      if (err) return reject(err);
      if (!result || result.length === 0) return resolve(null);
      resolve(result[0]);
    });
  });
};



// Recibe un objeto con nombre, correo, contraseña y rol y lo inserta en la base de datos
const createUser = (usuario) => {
  const { nombre, correo, contrasenaHash, rol } = usuario;
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO usuarios (nombre, correo, contrasena, rol) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, correo, contrasenaHash, rol], (err, result) => {
      if (err) return reject(err);
      resolve(result.insertId);
    });
  });
};

export default { getUserByCorreo, createUser };
