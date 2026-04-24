import { Star } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5/CSS3",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "eCommerce",
      items: [
        "Shopify",
        "WooCommerce",
        "Product Management",
        "Conversion Optimization",
        "Analytics",
        "Payment Gateways",
      ],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "CI/CD", "AWS", "Firebase", "Webpack"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="w-full px-6 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-left">
          Skills & <span className="text-[#9CAF88]">Expertise</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
