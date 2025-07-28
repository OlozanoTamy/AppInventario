import userModel from './models/UserModel.js'; // Asegúrate que la U es mayúscula si el archivo lo es

const pruebaConexion = async () => {
  try {
    console.log('Probando conexión a la base de datos...');

    const correo = 'oscar.lozano@grupooet.com'; // Usa un correo válido que esté en tu tabla
    const usuario = await userModel.getUserByCorreo(correo);
     
    if (usuario) {
      console.log('✅ Usuario encontrado:');
      console.log(usuario);
    } else {
      console.log('❌ No se encontró ningún usuario con ese correo.');
    }

    // Si quieres cerrar la conexión, importa db y llama db.end();
    // import db from './db.js';
    // db.end();
  } catch (err) {
    console.error('❌ Error durante la prueba:', err);
  }
};

pruebaConexion();
