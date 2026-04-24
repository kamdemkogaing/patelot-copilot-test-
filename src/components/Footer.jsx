import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white border-t border-[#556B2F]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#9CAF88]">About</h3>
            <p className="text-gray-400 text-sm">
              Full-stack developer passionate about creating beautiful and
              functional web experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#9CAF88] transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9CAF88] transition">
                  eCommerce Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9CAF88] transition">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#9CAF88] transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-[#9CAF88] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#9CAF88] transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#9CAF88] transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#9CAF88] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Ich freue mich auf Deine Rückmeldung.
            </p>
            <a
              href="mailto:patrick-kamdem@patelot.de"
              className="inline-block bg-[#556B2F] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#9CAF88] hover:text-black transition"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="border-t border-[#556B2F] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2026 Patrick Kamdem. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/kamdemkogaing"
                className="text-gray-400 hover:text-[#9CAF88] transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-kamdem-b88b3630b"
                className="text-gray-400 hover:text-[#9CAF88] transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.xing.com/profile/Patrick_Kamdem3"
                className="text-gray-400 hover:text-[#9CAF88] transition"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:patrick-kamdem@patelot.de"
                className="text-gray-400 hover:text-[#9CAF88] transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
