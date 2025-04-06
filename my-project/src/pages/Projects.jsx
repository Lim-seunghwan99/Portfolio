// import React from 'react';

// function Projects() {
//   return (
//     <section id="projects" className="h-screen flex items-center justify-center bg-white">
//       <div className="text-center">
//         <h2 className="text-4xl font-bold mb-4">Projects</h2>
//         <p>Explore some of the projects I've worked on:</p>
//         <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-gray-300 p-4">Project 1</div>
//           <div className="bg-gray-300 p-4">Project 2</div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
// src/pages/Projects.js
import React from 'react';

// Example project data - replace with your actual projects
const projectsData = [
  {
    title: "Project One Title",
    description: "A brief description of project one, highlighting key features and technologies used.",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=Project+Image", // Replace with actual image URL
    liveUrl: "#", // Replace with live demo link
    codeUrl: "#", // Replace with source code link
  },
  {
    title: "Project Two Title",
    description: "Description for the second project, mentioning its purpose and stack.",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=Project+Image",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Three Title",
    description: "This project showcases complex logic and integration with third-party APIs.",
    imageUrl: "https://via.placeholder.com/400x250/cccccc/888888?text=Project+Image",
    liveUrl: "#",
    codeUrl: "#",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-white"> {/* Alternating background */}
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12" data-aos="fade-up">
          Projects
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)} // Stagger animation
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-grow"> {/* flex-grow makes content fill space */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p> {/* flex-grow pushes links down */}
                <div className="mt-auto flex justify-start space-x-4"> {/* Links at the bottom */}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline transition duration-300 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl && project.codeUrl !== "#" && (
                     <a
                       href={project.codeUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-700 hover:text-black hover:underline transition duration-300 text-sm font-medium"
                     >
                       Source Code
                     </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;