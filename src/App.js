import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout/>
     <div className="container">
     <About/>
     <Education/>
     <TechStack/>
     <Projects/>
     <Contact/>
      </div> 
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">    Made by saroj🤩</h4>
      </div>
      <ScrollToTop 
      smooth 
      color="#f29567"
      style={{backgroundcolor: '#1e1e2c',borderRadius:"80px",}} />
    </>
  );
}

export default App;
