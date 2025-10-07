import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import styles from './Sidebar.module.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('token');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleNavigation = (path, action) => {
    if (action) {
      action();
    } else {
      navigate(path);
    }
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
    <div className={styles.sidebar}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>My App</h1>
      </div>

      {/* User Info */}
      {isLoggedIn && user && (
        <div className={styles.userInfo}>
          <div className={styles.userInfoInner}>
            <div className={styles.userAvatar}>
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div className={styles.userDetails}>
              <p className={styles.userName}>
                {user.firstName} {user.lastName}
              </p>
              <p className={styles.userEmail}>{user.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={styles.nav}>
        {navigation.map((item) => {
          const active = item.path && isActive(item.path);
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path, item.action)}
              className={`${styles.navButton} ${active ? styles.active : ''}`}
            >
              <Icon className={styles.navIcon} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.footerText}>&copy; 2025 My App</p>
      </div>
    </div>
  );
}

export default Sidebar;
