// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Experience from "./pages/Experience";
// import Contact from "./pages/Contact";
// import "./App.css";

// export default function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen items-center justify-start bg-gray-800 text-white">
//         {/* Nav bar */}
//         <nav className="w-full py-6 bg-gray-900">
//           <div className="flex justify-center gap-8">
//             <Link to="/" className="text-xl hover:text-blue-400">Home</Link>
//             <Link to="/projects" className="text-xl hover:text-blue-400">Projects</Link>
//             <Link to="/skills" className="text-xl hover:text-blue-400">Skills</Link>
//             <Link to="/experience" className="text-xl hover:text-blue-400">Experience</Link>
//             <Link to="/contact" className="text-xl hover:text-blue-400">Contact</Link>
//           </div>
//         </nav>

//         {/* Content */}
//         <div className="flex flex-col justify-start items-center w-full flex-1 px-4 py-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/experience" element={<Experience />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';  // react-scroll에서 Link import
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-10">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="home" smooth={true} duration={500} className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="hover:text-blue-500">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="hover:text-blue-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;



