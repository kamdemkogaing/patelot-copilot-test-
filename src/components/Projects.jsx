import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product management, cart system, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing projects and skills. Built with React and Tailwind CSS for optimal performance.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard for tracking e-commerce metrics. Displays sales, conversion rates, and customer insights.",
      tech: ["React", "Chart.js", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "Inventory Management System",
      description:
        "Comprehensive inventory management system for multi-store operations. Includes stock tracking and automated alerts.",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="w-full px-6 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-left">
          Featured <span className="text-[#9CAF88]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg overflow-hidden border border-[#556B2F] hover:border-[#9CAF88] transition transform hover:scale-105"
            >
              <div className="h-40 bg-[#556B2F] opacity-30"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
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
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-[#9CAF88] hover:text-white transition"
                  >
                    <Github size={20} /> Code
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

export default Projects;
