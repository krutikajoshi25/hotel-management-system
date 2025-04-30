import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/Adminlogin';
import AdminDashboard from './pages/AdminDashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Admin login route */}
        <Route path="/adminlogin" element={<AdminLogin />} />


        <Route path="/admindashboard" element={<AdminDashboard />} />

        
      </Routes>
    </Router>
  );
}

export default App;
