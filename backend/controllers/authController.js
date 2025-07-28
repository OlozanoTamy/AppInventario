import { compare,hash} from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';

const login = async (req, res) => {
  const { correo, password } = req.body;
  if (!correo || !password) {
    return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
  }

  try {
    const user = await userModel.getUserByCorreo(correo);
    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }
    // Usa el campo correcto de la base de datos
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );


    res.json({
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
      rol: user.rol,
      token
    });

  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default login;
