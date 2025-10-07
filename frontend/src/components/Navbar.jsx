import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setShowUserMenu(false);
  };

  const navigation = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Search', icon: MagnifyingGlassIcon, path: '/search' },
    { name: 'Edit', icon: Cog6ToothIcon, path: '/edit' },
  ];

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
      backgroundColor: '#1f2937',
      borderBottom: '1px solid #374151',
      padding: '0 24px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }}>
      {/* Left Section - Search Bar */}
      <div style={{ flex: 1, maxWidth: '500px' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              backgroundColor: '#374151',
              border: '1px solid #4b5563',
              borderRadius: '8px',
              padding: '8px 16px 8px 40px',
              color: 'white',
              fontSize: '14px',
              outline: 'none',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.backgroundColor = '#4b5563';
              e.target.style.borderColor = '#6366f1';
            }}
            onBlur={(e) => {
              e.target.style.backgroundColor = '#374151';
              e.target.style.borderColor = '#4b5563';
            }}
          />
          <MagnifyingGlassIcon style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '18px',
            width: '18px',
            color: '#9ca3af'
          }} />
        </div>
      </div>

      {/* Center Section - Navigation */}
      <div style={{ display: 'flex', gap: '8px', marginLeft: '24px' }}>
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#374151';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#d1d5db';
              }}
            >
              <Icon style={{ height: '20px', width: '20px' }} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Section - User Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '24px' }}>
        {/* Notifications */}
        <button
          style={{
            position: 'relative',
            padding: '8px',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#d1d5db',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#374151';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#d1d5db';
          }}
        >
          <BellIcon style={{ height: '22px', width: '22px' }} />
          <span style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
            height: '8px',
            width: '8px',
            backgroundColor: '#ef4444',
            borderRadius: '50%',
            border: '2px solid #1f2937'
          }}></span>
        </button>

        {/* User Profile */}
        {isLoggedIn && user ? (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '6px 12px 6px 6px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#374151';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                width: '36px',
                borderRadius: '50%',
                backgroundColor: '#6366f1',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                {user.firstName?.[0]}{user.lastName?.[0]}
              </div>
              <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                {user.firstName}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                minWidth: '200px',
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                padding: '8px',
                zIndex: 50
              }}>
                <div style={{
                  padding: '12px',
                  borderBottom: '1px solid #374151'
                }}>
                  <p style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                    {user.firstName} {user.lastName}
                  </p>
                  <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '2px' }}>
                    {user.email}
                  </p>
                </div>
                <button
                  onClick={() => handleNavigation('/')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#d1d5db',
                    fontSize: '14px',
                    cursor: 'pointer',
                    marginTop: '4px',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#374151';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <UserCircleIcon style={{ height: '18px', width: '18px' }} />
                  Profile
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => handleNavigation('/registration')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#6366f1',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4f46e5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#6366f1';
            }}
          >
            <UserPlusIcon style={{ height: '20px', width: '20px' }} />
            Register
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
