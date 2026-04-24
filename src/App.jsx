import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
