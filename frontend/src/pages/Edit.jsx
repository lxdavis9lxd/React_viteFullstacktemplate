import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function Edit() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="mx-auto min-h-full max-w-[1600px] p-6 lg:p-8 xl:p-12">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-gray-900">Edit</h1>
              <p className="mt-4 text-lg text-gray-600">Edit functionality coming soon...</p>
              
              {/* Editor placeholder */}
              <div className="mt-8">
                <div className="rounded-lg border border-gray-300 bg-gray-50 p-6">
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                    <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                    <div className="h-4 w-2/3 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Edit;
