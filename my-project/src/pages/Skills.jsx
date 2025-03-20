import React from 'react';

function Skills() {
  return (
    <section id="skills" className="h-screen flex items-center justify-center bg-gray-200">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p>Here are some of the technologies I work with:</p>
        <ul className="mt-4 flex space-x-6 justify-center">
          <li className="text-xl">React</li>
          <li className="text-xl">Node.js</li>
          <li className="text-xl">Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
