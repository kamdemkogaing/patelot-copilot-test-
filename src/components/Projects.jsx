import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Mein persönliches Portfolio, das meine Arbeit als Frontend-Entwickler präsentiert.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://patelot.de/",
      github: "#",
    },
    {
      title: "Boxy Generator",
      description:
        "Erstellen Sie mit wenigen Klicks maßgeschneiderte, responsive Box-Layouts für Ihre Website.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://boxy.patelot.de/",
      github: "#",
    },
    {
      title: "Countries Selection",
      description:
        "Das Projekt gibt einen Überblick über die Hauptstadt und die ungefähre Bevölkerungszahl der genannten Länder.",
      tech: ["React", "API"],
      link: "https://countries.patelot.de/",
      github: "#",
    },
    {
      title: "Passwort Generator",
      description:
        "Sicher und zufällig erstelltes Passwort, das den höchsten Sicherheitsstandards entspricht.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://pwd-generator.patelot.de/",
      github: "#",
    },
    {
      title: "Taskmate - ToDoList",
      description:
        "Diese einfache To-Do-Liste demonstriert die Verwendung von React für das Erstellen und Verwalten einer Liste von Aufgaben.",
      tech: ["React", "JavaScript"],
      link: "https://todolist.patelot.de/",
      github: "#",
    },
    {
      title: "Cinemate - Movie Programm",
      description:
        "Entdecke mit Cinemate die Welt des Kinos neu! Übersichtliches Programm mit aktuellen Filmhighlights.",
      tech: ["React", "API"],
      link: "https://cinemate.patelot.de/",
      github: "#",
    },
    {
      title: "AI Domain Suche",
      description:
        "Finden Sie den perfekten Domainnamen für Ihre Firma mit KI-Unterstützung.",
      tech: ["AI", "Web"],
      link: "https://www.ionos.de/ki-domain-namen-generator",
      github: "#",
    },
    {
      title: "Bulk Domain Suche",
      description:
        "Massenabfrage für Domains. Prüfen Sie mehrere Domains gleichzeitig.",
      tech: ["Web", "JavaScript"],
      link: "https://www.ionos.de/domains/massen-domain-suche",
      github: "#",
    },
    {
      title: "Moderne Shoplösung für PrintEquipment",
      description:
        "maßgeschneiderte Drucklösungen und individuell bedruckbare Geschenk- und Werbeartikel.",
      tech: ["Shopware", "JavaScript", "CSS", "SelectLine", "ManiacSeller"],
      link: "https://shop.printequipment.de/",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-left">
          Featured <span className="text-[#9CAF88]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl overflow-hidden border border-slate-700 hover:border-[#9CAF88]/50 transition-all duration-500 transform hover:scale-[1.02] hover:-rotate-1 hover:shadow-2xl hover:shadow-[#9CAF88]/20 flex flex-col backdrop-blur-sm"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9CAF88]/5 to-[#556B2F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header with tech stack preview */}
              <div className="relative h-32 bg-gradient-to-br from-[#556B2F]/20 via-[#9CAF88]/10 to-slate-800/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-[#9CAF88]/10 to-[#556B2F]/10"></div>
                </div>
                <div className="relative z-10 flex gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-[#9CAF88]/20 to-[#556B2F]/20 text-[#9CAF88] px-3 py-1 rounded-full text-xs font-medium border border-[#9CAF88]/30 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#9CAF88] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-1 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-[#556B2F]/20 to-[#9CAF88]/20 text-[#9CAF88] px-3 py-1 rounded-full text-xs font-medium border border-[#9CAF88]/30 hover:border-[#9CAF88] transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-[#9CAF88] to-[#556B2F] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#9CAF88]/30 transform hover:scale-105 flex items-center gap-2"
                  >
                    <span className="relative z-10">View Project</span>
                    <ExternalLink
                      size={18}
                      className="relative z-10 group-hover/btn:rotate-12 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#556B2F] to-[#9CAF88] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#9CAF88]/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
