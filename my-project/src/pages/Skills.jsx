import React from 'react';
import {
  FaJsSquare, FaPython, FaJava, FaReact, FaVuejs, FaNodeJs, FaAws, FaWindows, FaLinux, FaApple, FaDocker, FaGitAlt, FaGithub, FaGitlab, FaJenkins, FaBrain, FaHtml5, FaCss3Alt, FaBootstrap, FaRProject 
} from 'react-icons/fa'; // Example: Font Awesome icons
import { SiDjango, SiFastapi, SiSpringboot, SiMariadb, SiSqlite, SiAmazonrds , SiGooglecloud, SiKubernetes, SiGnubash, SiGithubactions, SiNginx, SiPytorch, SiScikitlearn, SiApachespark  } from "react-icons/si"; // Example: Simple Icons
import { GrHadoop, GrMysql } from "react-icons/gr"; // Example: Grommet Icons
import { VscAzure } from "react-icons/vsc"; // Example: VSCode Icons


const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: 'Python', icon: <FaPython className="text-blue-500" /> },
      { name: 'Java', icon: <FaJava className="text-red-600" /> },
      { name: 'R', icon: <FaRProject className="text-blue-600" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Vue.js', icon: <FaVuejs className="text-green-600" /> },
      { name: 'Django', icon: <SiDjango className="text-green-800" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-700" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-900" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-700" /> },
      { name: 'AWS RDS', icon: <SiAmazonrds className="text-orange-500" /> },
      { name: 'MySQL', icon: <GrMysql className="text-blue-600" /> }, // Example addition
    ]
  },
  {
    title: "Cloud Services",
    skills: [
      { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
      { name: 'Azure', icon: <VscAzure className="text-blue-500" /> },
      { name: 'GCP', icon: <SiGooglecloud className="text-blue-600" /> },
    ]
  },
  {
    title: "Operating Systems",
    skills: [
      { name: 'Windows', icon: <FaWindows className="text-blue-600" /> },
      { name: 'Linux', icon: <FaLinux className="text-yellow-500" /> },
      { name: 'MacOS', icon: <FaApple className="text-gray-500" /> },
      { name: 'Bash/Shell', icon: <SiGnubash className="text-gray-700" /> },
    ]
  },
  {
    title: "Big Data & Orchestration",
    skills: [
      { name: 'Hadoop', icon: <GrHadoop className="text-yellow-600" /> },
      { name: 'Spark', icon: <SiApachespark className="text-orange-500" /> }, 
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
      { name: 'GitLab', icon: <FaGitlab className="text-orange-500" /> },
      { name: 'Jenkins', icon: <FaJenkins className="text-gray-700" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-500" /> },
      { name: 'Nginx', icon: <SiNginx className="text-green-600" /> },
    ]
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: 'Machine Learning', icon: <FaBrain className="text-pink-500" /> },
      { name: 'Deep Learning', icon: <FaBrain className="text-purple-500" /> }, 
      { name: 'PyTorch', icon: <SiPytorch className="text-orange-600" /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-orange-500" /> },
    ]
  },
   {
    title: "Web Development Basics",
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    ]
  },
];

function SkillItem({ name, icon }) {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
      data-aos="fade-up" 
    >
      <div className="text-4xl mb-2"> {/* Adjust icon size here */}
        {icon ? React.cloneElement(icon, { className: `${icon.props.className} w-10 h-10` }) : <FaBrain />} {/* Render icon, provide default size */}
      </div>
      <p className="text-md font-medium text-gray-700">{name}</p>
    </div>
  );
}


function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"> {/* Added dark mode bg */}
      <div className="max-w-6xl w-full text-center"> {/* Increased max-width */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6" data-aos="fade-up">
          My Skills and Experience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="100">
          프로젝트에 적용해 봤거나 학습 및 실습한 기술들입니다.
        </p>

        {/* Iterate over categories */}
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12" data-aos="fade-up" data-aos-delay={150 * categoryIndex}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {category.title}
            </h3>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6" // Adjusted grid columns
            >
              {/* Iterate over skills within the category */}
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  // Optional: adjust AOS delay for individual items if needed
                  // data-aos-delay={(skillIndex % 6) * 50}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;