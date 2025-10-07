import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Search() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-900">Search</h1>
            <p className="mt-4 text-gray-600">Search functionality coming soon...</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Search;
