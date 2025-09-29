const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              CS — Ticket System
            </h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              FAQ
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Changelog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Download
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </a>
            
            {/* New Ticket Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition">
              <span className="text-lg">+</span>
              <span>New Ticket</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;