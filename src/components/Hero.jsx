import jsPDF from "jspdf";
import { ArrowRight, Code, ShoppingCart } from "lucide-react";

const Hero = () => {
  const experiences = [
    {
      company: "Print Equipment GmbH",
      position: "Frontend Architect & E-Commerce Sales Manager",
      period: "2024 - Heute",
      link: "https://shop.printequipment.de/",
    },
    {
      company: "IONOS",
      position: "Software Developer",
      period: "2014 - 2024",
      link: "https://www.ionos.de/",
    },
    {
      company: "Götz",
      position: "IT Mitarbeiter",
      period: "2013 - 2014",
      link: "https://www.goetz-auktion.de/",
    },
    {
      company: "Siemens",
      position: "Praktikant",
      period: "2012 - 2013",
      link: "https://www.siemens.com/",
    },
    {
      company: "IONOS",
      position: "Werkstudent IT/QA",
      period: "2008 - 2012",
      link: "https://www.ionos.de/",
    },
  ];

  const downloadCV = () => {
    const doc = new jsPDF();

    // Titel
    doc.setFontSize(20);
    doc.text("Patrick Kamdem - Berufserfahrung", 20, 30);

    // Untertitel
    doc.setFontSize(14);
    doc.text("Frontend Architect & E-Commerce Sales Manager", 20, 45);

    let yPosition = 65;

    experiences.forEach((exp) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 30;
      }

      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text(`${exp.position}`, 20, yPosition);

      doc.setFont("helvetica", "normal");
      doc.text(`${exp.company} - ${exp.period}`, 20, yPosition + 10);

      yPosition += 25;
    });

    // Footer
    doc.setFontSize(10);
    doc.text("Erstellt am: " + new Date().toLocaleDateString(), 20, 280);

    doc.save("Patrick_Kamdem_Berufserfahrung.pdf");
  };
  return (
    <section id="home" className="bg-black text-white pt-10 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#9CAF88]">
              Patrick Kamdem -{" "}
              <span className="text-[#9CAF88]">Frontend Architect</span>
            </h2>
            <p className="text-sm text-gray-300 mb-8">
              Engagierter Frontend-Entwickler mit Erfahrung in der Entwicklung
              moderner, benutzerfreundlicher Webanwendungen und anderen
              spannenden Projekten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-[#556B2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#9CAF88] hover:text-black transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work <ArrowRight size={20} />
              </a>
              <button
                onClick={downloadCV}
                className="border-2 border-[#9CAF88] text-[#9CAF88] px-8 py-3 rounded-lg font-semibold hover:bg-[#9CAF88] hover:text-black transition"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-lg border border-[#556B2F] hover:border-[#9CAF88] transition">
              <Code size={40} className="text-[#9CAF88] mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-400">
                React, Next Js, Tailwind CSS, JavaScript
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-[#556B2F] hover:border-[#9CAF88] transition">
              <ShoppingCart size={40} className="text-[#9CAF88] mb-4" />
              <h3 className="text-xl font-bold mb-2">eCommerce Solutions</h3>
              <p className="text-gray-400">
                Shopware, SelectLine, ManiacSeller, NOSTO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
