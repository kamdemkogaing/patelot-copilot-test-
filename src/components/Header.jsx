import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 transition-all duration-300 md:mx-4 md:mt-4 md:rounded-2xl ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-slate-900/20"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="px-6 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section - ganz links */}
            <div className="flex items-center gap-3">
              <a
                href="#home"
                className="group flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img
                    src="/logo-kamdem.png"
                    alt="Kamdem Logo"
                    className="relative h-10 w-auto rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-[#9CAF88] to-[#556B2F] bg-clip-text text-transparent">
                    patelot.cloud
                  </span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#9CAF88] animate-pulse" />
                    <span className="text-xs text-gray-400 font-medium">
                      by Patrick Kamdem
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {[
                  { href: "#home", label: "Start" },
                  { href: "#about", label: "Über mich" },
                  { href: "#skills", label: "Fähigkeiten" },
                  { href: "#experience", label: "Erfahrung" },
                  { href: "#projects", label: "Projekte" },
                  { href: "#contact", label: "Kontakt" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 font-medium">
                      {item.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] group-hover:w-full transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - ganz rechts */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                {isOpen ? (
                  <X className="w-6 h-6 text-white relative z-10" />
                ) : (
                  <Menu className="w-6 h-6 text-white relative z-10" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 pt-2">
              {[
                { href: "#home", label: "Start" },
                { href: "#about", label: "Über mich" },
                { href: "#skills", label: "Fähigkeiten" },
                { href: "#experience", label: "Erfahrung" },
                { href: "#projects", label: "Projekte" },
                { href: "#contact", label: "Kontakt" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group block relative px-4 py-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 font-medium">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#9CAF88] to-[#556B2F] group-hover:h-8 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] rounded-b-2xl overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#556B2F] to-[#9CAF88] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
