import { UserIcon, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Today() {
  const measurements = [
    { id: 1, user: 'Juan', meter: 100, consumption: 120, time: '2 hours ago', },
    { id: 2, user: 'Maria', meter: 101, consumption: 120, time: '3 hours ago',},
    { id: 3, user: 'Pedro', meter: 102, consumption: 120, time: '4 hours ago',},
    { id: 4, user: 'Ana', meter: 103, consumption: 120, time: '5 hours ago',},
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white">Consumo de Hoy</h1>
          <p className="text-gray-400 text-sm mt-1">Aquí puedes ver el consumo registrado en el día.</p>
        </div>
        <Link to="/consumptions/register" className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Registrar Consumo</span>
        </Link>
      </div>

      <div className="glass-card mt-8">
        <h2 className="text-xl font-bold text-white mb-6">Consumo de Hoy</h2>
        <div className="space-y-4">
          {measurements.map((measurement) => (
            <div key={measurement.id} className="flex items-center justify-between p-4 bg-darkest/30 rounded-lg border border-gray-green/10 hover:border-light-mint/20 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center">
                  <UserIcon />
                </div>
                <div>
                  <p className="text-white font-medium">Medición registrada</p>
                  <p className="text-sm text-gray-400">Usuario {measurement.user} registró {measurement.consumption} kW/h en el medidor #{measurement.meter}</p>
                </div>
              </div>
              <span className="text-sm text-light-gray-green">Hace {measurement.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}