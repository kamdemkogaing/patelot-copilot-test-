import { Star } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Technologien",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Tools",
      items: [
        "UX/UI-Design",
        "VSCode",
        "Scrum",
        "JIRA",
        "Confluence",
        "Photoshop",
        "ADOBE Target Test",
        "SEA/SEO",
      ],
    },
    {
      category: "Support",
      items: [
        "Architekturberatung",
        "Analyse",
        "Wartung",
        "CRO",
        "A/B Testing",
        "eCommerce Lösungen",
        "Hosting & Deployment",
        "Designsysteme",
      ],
    },
  ];

  return (
    <section id="skills" className="pt-10 pb-20 bg-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-left">
          Skills & <span className="text-[#9CAF88]">Expertise</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-lg border border-[#556B2F] hover:border-[#9CAF88] transition transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <Star className="text-[#9CAF88] mr-2" size={24} />
                <h3 className="text-xl font-bold text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
