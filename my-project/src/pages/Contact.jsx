import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" data-aos="fade-up">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to connect!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8" data-aos="fade-up" data-aos-delay="200">
          {/* Email */}
          <a
            href="mailto:your.email@example.com" // Replace with your email
            className="flex items-center text-lg text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
          >
            {/* Optional Icon: <FaEnvelope className="mr-2" /> */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
             </svg>
            your.email@example.com
          </a>

          {/* Social Links (Example: GitHub) */}
          <a
            href="https://github.com/Lim-seunghwan99" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-gray-700 hover:text-black transition duration-300"
          >

            <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>

          {/* Add more links like LinkedIn */}
          {/*
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-blue-700 hover:text-blue-900 transition duration-300">
             <FaLinkedin className="mr-2" />
             LinkedIn
          </a>
          */}
        </div>

        {/* Optional: Add a contact form component here later */}

      </div>
    </section>
  );
}

export default Contact;