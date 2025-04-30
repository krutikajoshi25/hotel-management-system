import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import backgroundImage from '../assets/image01.jpg'; // ✅ Import background image

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  // ✅ Initialize navigate from useNavigate
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'Email must include "@"';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrors({ message: 'Please enter both email and password' });
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      setSuccess(response.data.message);
      localStorage.setItem('token', response.data.token); // Store the token in localStorage
      setErrors({});

      // ✅ Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      setSuccess('');
      setErrors({ message: error.response?.data.message || 'Login failed' });
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.overlay}> {/* 🔵 Blue transparent overlay */}
        <div style={styles.card}>
          <h2 style={styles.title}>Login</h2>
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
              {errors.email && <p style={styles.error}>{errors.email}</p>}
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
              {errors.password && <p style={styles.error}>{errors.password}</p>}
            </div>

            <button type="submit" style={styles.button}>Login</button>
          </form>

          {success && <p style={styles.success}>{success}</p>}
          {errors.message && <p style={styles.error}>{errors.message}</p>}

          <p style={{ marginTop: '1rem' }}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
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
    backgroundColor: 'rgba(56, 56, 55, 0.4)', // 🔵 Blue transparent
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
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
  success: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '1rem',
    textAlign: 'center',
  },
};

export default Login;
