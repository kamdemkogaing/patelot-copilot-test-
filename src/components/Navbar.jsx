import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-blue-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Services
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">
            Home
          </a>
          <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">
            About
          </a>
          <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">
            Services
          </a>
          <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
