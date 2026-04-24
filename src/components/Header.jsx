import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-lg border-b border-[#556B2F]">
      <nav className="w-full px-6 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#9CAF88]">Portfolio</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="hover:text-[#9CAF88] transition px-3 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#9CAF88] transition px-3 py-2 rounded-md"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-[#9CAF88] transition px-3 py-2 rounded-md"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-[#9CAF88] transition px-3 py-2 rounded-md"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-[#9CAF88] transition px-3 py-2 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <a
              href="#home"
              className="block px-3 py-2 hover:bg-[#556B2F] rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-[#556B2F] rounded-md"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 hover:bg-[#556B2F] rounded-md"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 hover:bg-[#556B2F] rounded-md"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 hover:bg-[#556B2F] rounded-md"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
