function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
      <h1 className="text-2xl font-bold text-red-600 mb-2">Acceso no autorizado</h1>
      <p className="text-gray-700">No tienes permisos para ver esta página.</p>
    </div>
  );
}

export default Unauthorized;