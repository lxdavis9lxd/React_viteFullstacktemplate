import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Home() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome{user ? `, ${user.firstName}` : ''}!
            </h1>
            <p className="mt-4 text-gray-600">
              This is your home page. Use the sidebar or navbar to navigate.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
