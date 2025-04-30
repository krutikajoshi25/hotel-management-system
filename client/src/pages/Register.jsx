import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    country: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!formData.email.includes('@')) newErrors.email = 'Invalid Email';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (formData.phone.length !== 10) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log('Form Data:', formData);

        const response = await axios.post('http://localhost:5000/api/register', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        setSuccess(response.data.message);
        setErrors({});
      } catch (error) {
        setSuccess('');
        setErrors({ server: error.response?.data.message || 'Registration failed' });
      }
    } else {
      setSuccess('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register</h2>
        <form onSubmit={handleSubmit}>
          {[ 
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Password', name: 'password', type: 'password' },
            { label: 'Phone Number', name: 'phone', type: 'text' },
            { label: 'City', name: 'city', type: 'text' },
            { label: 'Country', name: 'country', type: 'text' },
          ].map((field) => (
            <div key={field.name} style={styles.formGroup}>
              <label>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                onChange={handleChange}
                style={styles.input}
                
              />
              {errors[field.name] && <p style={styles.error}>{errors[field.name]}</p>}
            </div>
          ))}
          <button type="submit" style={styles.button}>Register</button>
        </form>

        {success && <p style={styles.success}>{success}</p>}

        <p style={{ marginTop: '1rem' }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '150vh',
    background: 'linear-gradient(to right, gold, goldenrod)', // Gold gradient background
    display: 'flex',
    justifyContent: 'center', // Center the form horizontally
    alignItems: 'center', // Center the form vertically
  },
  card: {
    backgroundColor: 'white',
    padding: '5rem',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    width: '90%',
    maxWidth: '450px',
    marginBottom:'190px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '1.2rem',
  },
  formGroup: {
    marginBottom: '0rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '3px',
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
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '1rem',
    textAlign: 'center',
  },
};

export default Register;
