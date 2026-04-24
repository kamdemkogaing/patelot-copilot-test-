import { Briefcase } from "lucide-react";

const Experience = () => {
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

  return (
    <section id="experience" className="pt-10 pb-20 bg-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Berufserfahrung
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#9CAF88] to-[#556B2F] h-full rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#9CAF88] rounded-full border-4 border-slate-900 z-10"></div>

                {/* Experience card */}
                <div
                  className={`w-full max-w-md bg-black rounded-xl p-6 border border-[#556B2F] hover:border-[#9CAF88] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9CAF88]/20 ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#9CAF88] to-[#556B2F] p-3 rounded-lg">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-[#9CAF88] text-lg font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 mr-3 bg-slate-800 px-3 py-1 rounded-full inline-block">
                        {exp.period}
                      </p>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#9CAF88] hover:text-white transition-colors duration-200 font-medium"
                      >
                        Mehr erfahren
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
