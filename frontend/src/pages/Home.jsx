import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Home() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="mx-auto min-h-full max-w-[1600px] p-6 lg:p-8 xl:p-12">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-gray-900">
                Welcome{user ? `, ${user.firstName}` : ''}!
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                This is your home page. Use the sidebar or navbar to navigate.
              </p>
              
              {/* Grid layout for ultrawide */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
                  <p className="mt-2 text-sm text-gray-600">View your activity and insights</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Items</h3>
                  <p className="mt-2 text-sm text-gray-600">Access your latest work</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                  <p className="mt-2 text-sm text-gray-600">Stay up to date</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
