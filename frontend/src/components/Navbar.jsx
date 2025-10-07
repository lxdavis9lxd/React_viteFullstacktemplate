import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  UserCircleIcon,
  BellIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const isLoggedIn = localStorage.getItem('token');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleNavigation = (path) => {
    navigate(path);
    setShowUserMenu(false);
  };

  const navigation = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Search', icon: MagnifyingGlassIcon, path: '/search' },
    { name: 'Edit', icon: Cog6ToothIcon, path: '/edit' },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Left Section - Search Bar */}
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <MagnifyingGlassIcon className={styles.searchIcon} />
        </div>
      </div>

      {/* Center Section - Navigation */}
      <div className={styles.navSection}>
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={styles.navButton}
            >
              <Icon className={styles.navIcon} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Section - User Menu */}
      <div className={styles.userSection}>
        {/* Notifications */}
        <button className={styles.notificationButton}>
          <BellIcon className={styles.notificationIcon} />
          <span className={styles.notificationDot}></span>
        </button>

        {/* User Profile */}
        {isLoggedIn && user ? (
          <div className={styles.userMenuWrapper}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className={styles.userButton}
            >
              <div className={styles.userAvatar}>
                {user.firstName?.[0]}{user.lastName?.[0]}
              </div>
              <span className={styles.userName}>{user.firstName}</span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className={styles.userMenu}>
                <div className={styles.userMenuHeader}>
                  <p className={styles.userMenuName}>
                    {user.firstName} {user.lastName}
                  </p>
                  <p className={styles.userMenuEmail}>{user.email}</p>
                </div>
                <button
                  onClick={() => handleNavigation('/')}
                  className={styles.userMenuItem}
                >
                  <UserCircleIcon className={styles.userMenuIcon} />
                  Profile
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => handleNavigation('/registration')}
            className={styles.registerButton}
          >
            <UserPlusIcon className={styles.navIcon} />
            Register
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
