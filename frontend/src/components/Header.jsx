import { Bell, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  // Simple mapping for breadcrumb title
  const titles = {
    '/admin': 'Dashboard Admin',
    '/meters': 'Mis Medidores',
    '/meters/register': 'Registrar Nuevo Medidor',
    '/consumptions/register': 'Registrar Consumo',
  };

  const currentTitle = titles[location.pathname] || 'Eletrican Control';

  return (
    <header className="h-16 glass border-b border-gray-green/20 flex items-center justify-between px-8 z-10">
      <div>
        <h2 className="text-xl font-bold text-white tracking-wide">
          {currentTitle}
        </h2>
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="text-gray-300 hover:text-light-mint transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white group-hover:text-light-mint transition-colors">Usuario Demo</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-medium-green to-light-mint flex items-center justify-center text-darkest shadow-md">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
