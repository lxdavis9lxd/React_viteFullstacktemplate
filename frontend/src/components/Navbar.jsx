import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const navigation = [
    { name: 'Home', icon: HomeIcon, path: '/' },
    { name: 'Search', icon: MagnifyingGlassIcon, path: '/search' },
    {
      name: isLoggedIn ? 'Profile' : 'Register',
      icon: UserPlusIcon,
      path: isLoggedIn ? '/' : '/registration',
    },
  ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-white">Logo</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                >
                  <item.icon className="mr-2 h-5 w-5" aria-hidden="true" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
