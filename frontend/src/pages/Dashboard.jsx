import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Bienvenido, {user.nombre}</h1>

      <nav>
        <ul>
          {user.rol === 'admin' && <li><Link to="/usuarios">Gestión de Usuarios</Link></li>}
          <li><Link to="/activos">Lista de Activos</Link></li>
          {user.rol === 'admin' && <li><Link to="/activos/nuevo">Registrar Activo</Link></li>}
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
