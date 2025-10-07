import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    setIsMobileOpen(false);
  };

  const handleNavigation = (path, action) => {
    if (action) {
      action();
    } else {
      navigate(path);
    }
    setIsMobileOpen(false);
  };

  const navigation = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Edit', icon: PencilSquareIcon, path: '/edit' },
    { name: 'Search', icon: MagnifyingGlassIcon, path: '/search' },
    {
      name: isLoggedIn ? 'Logout' : 'Login',
      icon: ArrowRightOnRectangleIcon,
      action: isLoggedIn ? handleLogout : () => navigate('/login'),
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '256px',
      height: '100vh',
      backgroundColor: '#111827',
      borderRight: '1px solid #374151',
      flexShrink: 0
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #374151',
        backgroundColor: '#4f46e5'
      }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>My App</h1>
      </div>

      {/* User Info */}
      {isLoggedIn && user && (
        <div style={{
          borderBottom: '1px solid #374151',
          backgroundColor: '#1f2937',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              height: '40px',
              width: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: '#6366f1',
              fontSize: '14px',
              fontWeight: '600',
              color: 'white'
            }}>
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <p style={{ fontSize: '14px', fontWeight: '500', color: 'white', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.firstName} {user.lastName}
              </p>
              <p style={{ fontSize: '12px', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.email}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
        {navigation.map((item) => {
          const active = item.path && isActive(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path, item.action)}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                borderRadius: '8px',
                padding: '10px 12px',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '4px',
                backgroundColor: active ? '#4f46e5' : 'transparent',
                color: active ? 'white' : '#d1d5db',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.target.style.backgroundColor = '#1f2937';
                  e.target.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#d1d5db';
                }
              }}
            >
              <Icon style={{ marginRight: '12px', height: '20px', width: '20px', flexShrink: 0 }} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid #374151',
        padding: '16px'
      }}>
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#6b7280' }}>
          &copy; 2025 My App
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
