import {
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_#9CAF88_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_#556B2F_0%,_transparent_50%)]"></div>
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 py-20">
        {/* Quick Contact Section - Top Priority */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 backdrop-blur-sm border border-[#9CAF88]/20 rounded-full px-6 py-2 mb-8">
            <Heart className="w-4 h-4 text-[#9CAF88]" />
            <span className="text-sm text-[#9CAF88] font-medium">
              Lass uns zusammenarbeiten
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#9CAF88] to-white bg-clip-text text-transparent">
            Bereit, Dein Projekt zu starten?
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ich freue mich auf Deine Rückmeldung und helfe Dir gerne bei Deinem
            nächsten Projekt.
          </p>

          {/* Primary Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:patrick-kamdem@patelot.de"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#9CAF88] to-[#556B2F] text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#9CAF88]/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#556B2F] to-[#9CAF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">E-Mail senden</span>
            </a>

            <a
              href="tel:00491714170604"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-slate-600 hover:border-[#9CAF88] hover:scale-105 hover:shadow-2xl hover:shadow-slate-800/25 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9CAF88]/10 to-[#556B2F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Anrufen</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#9CAF88]" />
              <span>patrick-kamdem@patelot.de</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#9CAF88]" />
              <span>+49 171 4170604</span>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-[#9CAF88]">
              Patrick Kamdem
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Full-Stack Entwickler mit Leidenschaft für die Erstellung schöner
              und funktionaler Web-Erlebnisse. Spezialisiert auf moderne
              Technologien und die Bereitstellung außergewöhnlicher digitaler
              Lösungen.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Deutschland</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Dienstleistungen
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Webentwicklung
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  E-Commerce Lösungen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Beratung
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Schnellzugriff
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Start
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Fähigkeiten
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Projekte
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#9CAF88] transition-colors duration-200 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full"></div>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-6 md:mb-0">
              <p className="flex items-center gap-2">
                &copy; 2026 Patrick Kamdem. Erstellt mit
                <Heart className="w-4 h-4 text-[#9CAF88] animate-pulse" />
                Alle Rechte vorbehalten.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/kamdemkogaing"
                className="group p-3 bg-slate-800/50 hover:bg-[#9CAF88]/10 border border-slate-700 hover:border-[#9CAF88]/30 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-[#9CAF88] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-kamdem-b88b3630b"
                className="group p-3 bg-slate-800/50 hover:bg-[#9CAF88]/10 border border-slate-700 hover:border-[#9CAF88]/30 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#9CAF88] transition-colors" />
              </a>
              <a
                href="https://www.xing.com/profile/Patrick_Kamdem3"
                className="group p-3 bg-slate-800/50 hover:bg-[#9CAF88]/10 border border-slate-700 hover:border-[#9CAF88]/30 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#9CAF88] transition-colors" />
              </a>
              <a
                href="mailto:patrick-kamdem@patelot.de"
                className="group p-3 bg-slate-800/50 hover:bg-[#9CAF88]/10 border border-slate-700 hover:border-[#9CAF88]/30 rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#9CAF88] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
