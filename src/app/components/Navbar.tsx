export default function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-gray-900 to-black text-white py-6 px-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-24"></div>
          <h1 className="text-2xl font-bold">
            tipa<span className="text-sky-400">tweet</span>.fun
          </h1>
          <div className="relative w-24 flex justify-end">
            <button className="rounded-full border-sky-400 border-2 px-4 py-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors duration-300 text-sm font-semibold">
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }