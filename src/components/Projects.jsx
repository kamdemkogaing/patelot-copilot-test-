import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Mein persönliches Portfolio, das meine Arbeit als Frontend-Entwickler präsentiert.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://portfolio.patelot.de/",
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
              className="bg-slate-900 rounded-lg overflow-hidden border border-[#556B2F] hover:border-[#9CAF88] transition transform hover:scale-105 flex flex-col"
            >
              <div className="h-40 bg-[#556B2F] opacity-30"></div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-1 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#556B2F] text-[#9CAF88] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-[#9CAF88] hover:text-white transition"
                  >
                    <ExternalLink size={20} /> View Project
                  </a>
                  {/* <a
                    href={project.github}
                    className="flex items-center gap-2 text-[#9CAF88] hover:text-white transition"
                  >
                    <Github size={20} /> Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
