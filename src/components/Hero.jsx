import { ArrowRight, Code, ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white py-20">
      <div className="w-full px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Full Stack Developer &{" "}
              <span className="text-[#9CAF88]">eCommerce Manager</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Building beautiful, responsive web applications and managing
              digital commerce solutions with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#556B2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#9CAF88] hover:text-black transition transform hover:scale-105 flex items-center justify-center gap-2">
                View My Work <ArrowRight size={20} />
              </button>
              <button className="border-2 border-[#9CAF88] text-[#9CAF88] px-8 py-3 rounded-lg font-semibold hover:bg-[#9CAF88] hover:text-black transition">
                Download CV
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-6 rounded-lg border border-[#556B2F] hover:border-[#9CAF88] transition">
              <Code size={40} className="text-[#9CAF88] mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-400">
                React, Vue, Tailwind CSS, JavaScript
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg border border-[#556B2F] hover:border-[#9CAF88] transition">
              <ShoppingCart size={40} className="text-[#9CAF88] mb-4" />
              <h3 className="text-xl font-bold mb-2">eCommerce Solutions</h3>
              <p className="text-gray-400">Shopify, WooCommerce, Magento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
