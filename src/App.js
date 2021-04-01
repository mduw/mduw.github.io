import React from "react";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollTop";
import Projects from "./Components/Projects";
import { main, projects, resume, social } from "./data/data.json";

const App = () => {
  return (
    <div className="App">
      <Header data={{'main': main, 'social': social}} />
      <Resume data={resume} />
      <Projects data={projects} />
      <Contact />
      <Footer data={social} />
      <ScrollToTop />
    </div>
  );
};

export default App;
