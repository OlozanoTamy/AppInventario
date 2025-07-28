import bcrypt from 'bcrypt';
import createUser from '../models/UserModel.js';


const registerUser = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;

  try {
    const contrasenaHash = await bcrypt.hash(password, 10);
    const newUserId = await createUser({ nombre, correo, contrasenaHash, rol });
    res.status(201).json({ message: 'Usuario creado', id: newUserId });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

export default  registerUser ;
