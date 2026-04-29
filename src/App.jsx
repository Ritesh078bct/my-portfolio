import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  React.useEffect(() => {
    // initialize scroll reveal on mount (client-side only)
    let cleanup;
    import('./utils/scrollReveal').then((mod) => {
      cleanup = mod.initScrollReveal();
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-[var(--text)]">
      <Navbar />

      <main className="pt-20">
        <div className="page-container">
          <About />
          <Skills />
          <Work />
          <Education />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
