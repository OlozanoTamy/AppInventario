// Script para actualizar contraseñas en la base de datos
import db from './db.js';
import { hash } from 'bcrypt';

const actualizarContrasenas = async () => {
  const [usuarios] = await db.promise().query('SELECT id, contrasena FROM usuarios');
  for (const usuario of usuarios) {
    // Solo actualiza si la contraseña no está hasheada (ejemplo: longitud < 20)
    if (usuario.contrasena.length < 20) {
      const contrasenaHash = await hash(usuario.contrasena, 10);
      await db.promise().query(
        'UPDATE usuarios SET contrasena = ? WHERE id = ?',
        [contrasenaHash, usuario.id]
      );
      console.log(`Usuario ${usuario.id} actualizado`);
    }
  }
  db.end();
};

actualizarContrasenas();