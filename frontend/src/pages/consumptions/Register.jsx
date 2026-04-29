import { useState } from 'react';
import { Save, ArrowLeft, Calendar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterConsumption() {
  const [meter, setMeter] = useState('');
  const [watts, setWatts] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic
    navigate('/meters');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/consumptions/today" className="p-2 bg-dark rounded-lg hover:bg-gray-green/20 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Registrar Consumo</h1>
          <p className="text-gray-400 text-sm mt-1">Ingresa los watts consumidos para el período actual.</p>
        </div>
      </div>

      <div className="glass-card">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Medidor</label>
              <select
                value={meter}
                onChange={(e) => setMeter(e.target.value)}
                className="input-field"
                required
              >
                <option value="" disabled>Selecciona un medidor</option>
                <option value="1">#100456</option>
                <option value="2">#200891</option>
                <option value="3">#300124</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Consumo en kW/h</label>
              <input 
                type="number" 
                value={watts}
                onChange={(e) => setWatts(e.target.value)}
                className="input-field" 
                placeholder="Ej. 120"
                required
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-green/20 flex justify-end space-x-3">
            <Link to="/consumptions/today" className="btn-secondary">Cancelar</Link>
            <button type="submit" className="btn-primary flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Guardar Consumo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
