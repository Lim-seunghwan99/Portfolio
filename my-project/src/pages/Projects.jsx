import React from 'react';

function Projects() {
  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p>Explore some of the projects I've worked on:</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-300 p-4">Project 1</div>
          <div className="bg-gray-300 p-4">Project 2</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
