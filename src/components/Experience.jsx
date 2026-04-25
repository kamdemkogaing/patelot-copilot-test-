import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Print Equipment GmbH & Co. KG",
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
      position: "Web Developer",
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
        <div className="relative hidden md:block">
          {/* Tree trunk */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-[#8B4513] via-[#654321] to-[#2F1B14] h-full rounded-full shadow-lg"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Branch */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    index % 2 === 0
                      ? "left-1/2 w-16 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#654321]"
                      : "right-1/2 w-16 h-0.5 bg-gradient-to-l from-[#8B4513] to-[#654321]"
                  } z-10`}
                ></div>

                {/* Branch end decoration */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 ${
                    index % 2 === 0
                      ? "left-[calc(50%+4rem)] bg-[#654321] rounded-full"
                      : "right-[calc(50%+4rem)] bg-[#654321] rounded-full"
                  } z-20 shadow-md`}
                ></div>

                {/* Experience card */}
                <div
                  className={`w-full max-w-lg bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-[#556B2F] hover:border-[#9CAF88] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9CAF88]/30 hover:-rotate-1 ${
                    index % 2 === 0 ? "ml-20" : "mr-20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#9CAF88] to-[#556B2F] p-4 rounded-xl shadow-lg">
                      <Briefcase size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-[#9CAF88] text-xl font-semibold mb-3">
                        {exp.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 bg-slate-700 px-4 py-2 rounded-full inline-block shadow-md">
                        {exp.period}
                      </p>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#9CAF88] hover:text-white transition-colors duration-300 font-medium bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700"
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

        {/* Mobile version */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-[#556B2F] hover:border-[#9CAF88] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9CAF88]/20"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#9CAF88] to-[#556B2F] p-4 rounded-xl shadow-lg">
                  <Briefcase size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-[#9CAF88] text-xl font-semibold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 bg-slate-700 px-4 py-2 rounded-full inline-block shadow-md">
                    {exp.period}
                  </p>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#9CAF88] hover:text-white transition-colors duration-300 font-medium bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
