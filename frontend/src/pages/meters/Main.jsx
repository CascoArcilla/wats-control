import { Zap, Plus, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MetersMain() {
  const isAdmin = true;

  const meters = [
    { id: 1, number: '100456', name: 'María López', status: 'Activo', lastReading: '12,450', date: '28/04/2026' },
    { id: 2, number: '200891', name: 'Juan Perez', status: 'Inactivo', lastReading: '5,300', date: '15/03/2026' },
    { id: 3, number: '300124', name: 'Pedro Ramirez', status: 'Activo', lastReading: '8,900', date: '27/04/2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Medidores</h1>
          <p className="text-gray-400 text-sm mt-1">Gestiona los medidores asociados a tu cuenta.</p>
        </div>
        {isAdmin && (
          <Link to="/meters/register" className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Añadir Medidor</span>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {meters.map((meter) => (
          <div key={meter.id} className="glass-card group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-light-mint/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <h3 className="text-lg font-bold text-white">{meter.name}</h3>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-dark rounded-lg border border-gray-green/20">
                  <Zap className="w-6 h-6 text-light-mint" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">#{meter.number}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${meter.status === 'Activo' ? 'bg-medium-green/20 text-light-mint' : 'bg-red-500/20 text-red-400'}`}>
                    {meter.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-green/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Última lectura:</span>
                <span className="text-lg font-semibold text-white">{meter.lastReading} kW/h</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Fecha: {meter.date}</span>
                <Link to="/consumptions/register" className="text-light-mint hover:underline flex items-center">
                  <BarChart2 className="w-3 h-3 mr-1" />
                  Registrar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
