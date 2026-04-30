import { useState } from 'react';
import { Zap, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder login action
    navigate('/consumptions/today');
  };

  return (
    <div className="min-h-screen bg-darkest flex items-center justify-center relative overflow-hidden">
      {/* Background blobs for a modern feel */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-medium-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-light-mint rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-light-gray-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="z-10 w-full max-w-md p-8">
        <div className="glass-card shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-dark rounded-2xl shadow-lg border border-gray-green/20">
                <Zap className="w-10 h-10 text-light-mint" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-wider">EC Control</h1>
            <p className="text-gray-400 mt-2 text-sm">Gestiona tu consumo de energía</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Usuario</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field" 
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field" 
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
              <span>Ingresar</span>
              <LogIn className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
