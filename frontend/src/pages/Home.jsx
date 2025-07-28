const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Sistema de Gestión de Inventarios</h1>
        <p className="text-gray-600 text-lg mb-6">
          Bienvenido a la plataforma de control de activos de tecnología del Grupo OET.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Home;