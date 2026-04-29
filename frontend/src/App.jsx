import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/Dashboard';
import MetersMain from './pages/meters/Main';
import RegisterMeter from './pages/meters/Register';
import RegisterConsumption from './pages/consumptions/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/meters" replace />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="meters" element={<MetersMain />} />
          <Route path="meters/register" element={<RegisterMeter />} />
          <Route path="consumptions/register" element={<RegisterConsumption />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
