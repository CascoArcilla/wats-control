import { Users, Zap, TrendingUp, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Usuarios', value: '1,240', icon: Users, color: 'text-light-mint', bg: 'bg-light-mint/10' },
    { title: 'Total Medidores', value: '450', icon: Zap, color: 'text-medium-green', bg: 'bg-medium-green/10' },
    { title: 'Consumo Mensual', value: '12,400 kW/h', icon: TrendingUp, color: 'text-med-light-green', bg: 'bg-med-light-green/10' },
    { title: 'Alertas', value: '3', icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-400/10' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white">Resumen Administrativo</h1>
          <p className="text-gray-400 text-sm mt-1">Vista general del sistema y consumos.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="glass-card flex items-center space-x-4">
              <div className={`p-4 rounded-xl ${stat.bg}`}>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="glass-card mt-8">
        <h2 className="text-xl font-bold text-white mb-6">Actividad Reciente</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-darkest/30 rounded-lg border border-gray-green/10 hover:border-light-mint/20 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center">
                  <UserIcon />
                </div>
                <div>
                  <p className="text-white font-medium">Medición registrada</p>
                  <p className="text-sm text-gray-400">Usuario {i} registró 120 kW/h en el medidor #{100+i}</p>
                </div>
              </div>
              <span className="text-sm text-light-gray-green">Hace {i} horas</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return <Users className="w-5 h-5 text-gray-400" />;
}
