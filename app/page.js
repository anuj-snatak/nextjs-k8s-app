'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [backendData, setBackendData] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch from backend API using container name
    const fetchData = async () => {
      try {
        // Backend container accessible via service name 'backend'
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        setBackendData(data);
        setUsers(data.users);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '3rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#333',
          textAlign: 'center'
        }}>
          🐳 Docker Network Demo
        </h1>

        <div style={{
          background: '#f0f4ff',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
            Frontend (Next.js)
          </h2>
          <p style={{ color: '#666', margin: 0 }}>
            Container: <strong>frontend</strong>
          </p>
          <p style={{ color: '#666', margin: 0 }}>
            Port: <strong>3004</strong>
          </p>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading data from backend...</p>
          </div>
        )}

        {error && (
          <div style={{
            background: '#fee',
            padding: '1rem',
            borderRadius: '8px',
            color: '#c33'
          }}>
            Error: {error}
          </div>
        )}

        {backendData && (
          <>
            <div style={{
              background: '#e8f5e9',
              padding: '1.5rem',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h2 style={{ color: '#4caf50', marginBottom: '0.5rem' }}>
                Backend (Python Flask)
              </h2>
              <p style={{ color: '#666', margin: 0 }}>
                Container: <strong>backend</strong>
              </p>
              <p style={{ color: '#666', margin: 0 }}>
                Port: <strong>5000</strong>
              </p>
              <p style={{ 
                color: '#4caf50', 
                fontWeight: 'bold',
                marginTop: '0.5rem'
              }}>
                ✅ Connected via Docker Network!
              </p>
            </div>

            <div style={{
              background: '#fff3e0',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: '#f57c00', marginBottom: '1rem' }}>
                Users from Backend API
              </h3>
              {users.map(user => (
                <div key={user.id} style={{
                  background: 'white',
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ffe0b2'
                }}>
                  <strong>{user.name}</strong>
                  <br />
                  <span style={{ color: '#666' }}>{user.role}</span>
                </div>
              ))}
              <p style={{ 
                marginTop: '1rem', 
                fontSize: '0.9rem',
                color: '#666',
                fontStyle: 'italic'
              }}>
                {backendData.message}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
