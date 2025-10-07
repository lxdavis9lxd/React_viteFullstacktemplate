import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Search() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="mx-auto min-h-full max-w-[1600px] p-6 lg:p-8 xl:p-12">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-gray-900">Search</h1>
              <p className="mt-4 text-lg text-gray-600">Search functionality coming soon...</p>
              
              {/* Search box placeholder */}
              <div className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Search;
