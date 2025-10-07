import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

function Sidebar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
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

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">My App</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => (item.action ? item.action() : navigate(item.path))}
            className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon
              className="mr-3 h-6 w-6 flex-shrink-0"
              aria-hidden="true"
            />
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
