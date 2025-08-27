import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "DevCoderPS - Full-Stack Software Developer";
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden font-mono">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
