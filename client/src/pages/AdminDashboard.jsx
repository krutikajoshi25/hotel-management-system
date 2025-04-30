import React from 'react';

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello Admin 👋</h1>
      <p style={styles.subtext}>Welcome to the Admin Dashboard</p>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#f3f3f3',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '0.5rem',
  },
};

export default AdminDashboard;
