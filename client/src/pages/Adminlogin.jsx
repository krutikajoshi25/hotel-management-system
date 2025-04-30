import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import hero3image from '../assets/hero2.jpg';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrors({ message: 'Please enter both email and password' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('adminToken', token);
        console.log('Admin login successful. Token saved:', token);

        setErrors({});
        navigate('/admindashboard'); // ✅ Ensure this route exists in your Router
      } else {
        setErrors({ message: 'Invalid server response. Token missing.' });
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setErrors({ message: 'Invalid email or password' });
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${hero3image})` }}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h2 style={styles.title}>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>Login</button>
          </form>

          {errors.message && <p style={styles.error}>{errors.message}</p>}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(56, 56, 55, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(168, 153, 11, 0.3)',
    width: '90%',
    maxWidth: '400px',
    backdropFilter: 'blur(4px)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '1.5rem',
  },
  formGroup: {
    marginBottom: '1.2rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    marginTop: '0.5rem',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '0.25rem',
    textAlign: 'center',
  },
};

export default AdminLogin;
