import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/login',
        formData
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.error || err.message || 'Login failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #eef2ff, #ffffff, #faf5ff)',
      padding: '48px 16px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '448px'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{
            marginTop: '24px',
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#111827'
          }}>
            Sign in to your account
          </h2>
          <p style={{
            marginTop: '8px',
            textAlign: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            Welcome back! Please enter your details.
          </p>
        </div>
        <form style={{
          marginTop: '32px',
          borderRadius: '12px',
          backgroundColor: 'white',
          padding: '32px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }} onSubmit={handleSubmit}>
          {error && (
            <div style={{
              borderRadius: '6px',
              backgroundColor: '#fef2f2',
              padding: '16px',
              marginBottom: '24px'
            }}>
              <p style={{ fontSize: '14px', color: '#991b1b' }}>{error}</p>
            </div>
          )}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  padding: '10px 12px',
                  fontSize: '14px',
                  color: '#111827',
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label htmlFor="password" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  padding: '10px 12px',
                  fontSize: '14px',
                  color: '#111827',
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6366f1';
                  e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                borderRadius: '6px',
                background: loading ? '#9ca3af' : 'linear-gradient(to right, #6366f1, #8b5cf6)',
                padding: '10px 12px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'white',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.5 : 1,
                transition: 'all 0.2s',
                boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = 'linear-gradient(to right, #4f46e5, #7c3aed)';
                  e.target.style.boxShadow = '0 4px 6px rgba(99, 102, 241, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.background = 'linear-gradient(to right, #6366f1, #8b5cf6)';
                  e.target.style.boxShadow = '0 2px 4px rgba(99, 102, 241, 0.2)';
                }
              }}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px' }}>
            <span style={{ color: '#6b7280' }}>Don't have an account? </span>
            <button
              type="button"
              onClick={() => navigate('/registration')}
              style={{
                fontWeight: '500',
                color: '#6366f1',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#4f46e5';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#6366f1';
              }}
            >
              Register here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
