import { useState } from 'react';
import { Save, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterMeter() {
  const [number, setNumber] = useState('');
  const [owner, setOwner] = useState('');
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'María López' },
    { id: 2, name: 'Juan Perez' },
    { id: 3, name: 'Pedro Ramirez' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic
    navigate('/meters');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/meters" className="p-2 bg-dark rounded-lg hover:bg-gray-green/20 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Registrar Nuevo Medidor</h1>
          <p className="text-gray-400 text-sm mt-1">Añade un nuevo medidor al sistema.</p>
        </div>
      </div>

      <div className="glass-card">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Número de Medidor</label>
              <input 
                type="number" 
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="input-field" 
                placeholder="Ej. 100456"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Propietario</label>
              <select
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                className="input-field py-1.5"
                required
              >
                <option value="" className='bg-dark text-white' disabled>Seleccionar</option>
                {users.map((user) => (
                  <option key={user.id} value={user.name} className='bg-dark text-white'>{user.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-green/20 flex justify-end space-x-3">
            <Link to="/meters" className="btn-secondary">Cancelar</Link>
            <button type="submit" className="btn-primary flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Guardar Medidor</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
