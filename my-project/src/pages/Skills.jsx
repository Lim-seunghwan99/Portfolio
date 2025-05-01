import React from 'react';
import {
  FaJsSquare, FaPython, FaJava, FaReact, FaVuejs, FaNodeJs, FaAws, FaWindows, FaLinux, FaApple, FaDocker, FaGitAlt, FaGithub, FaGitlab, FaJenkins, FaBrain, FaHtml5, FaCss3Alt, FaBootstrap, FaRProject 
} from 'react-icons/fa'; 
import { SiDjango, SiFastapi, SiSpringboot, SiMariadb, SiSqlite, SiAmazonrds , SiGooglecloud, SiKubernetes, SiGnubash, SiGithubactions, SiNginx, SiPytorch, SiScikitlearn, SiApachespark, SiPostgresql, SiOpencv  } from "react-icons/si"; // Example: Simple Icons
import { GrHadoop, GrMysql } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";


const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: 'Python', icon: <FaPython className="text-blue-500" />, isPrimary: true },
      { name: 'Java', icon: <FaJava className="text-red-600" /> },
      { name: 'R', icon: <FaRProject className="text-blue-600" /> }, // isPrimary 없으면 false로 간주
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'React', icon: <FaReact className="text-blue-400" />, isPrimary: true },
      { name: 'Vue.js', icon: <FaVuejs className="text-green-600" /> },
      { name: 'Django', icon: <SiDjango className="text-green-800" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-green-700" />, isPrimary: true },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" />, isPrimary: true },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'MariaDB', icon: <SiMariadb className="text-blue-900" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-700" /> },
      { name: 'AWS RDS', icon: <SiAmazonrds className="text-orange-500" /> },
      { name: 'MySQL', icon: <GrMysql className="text-blue-600" />, isPrimary: true },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
    ]
  },
  {
    title: "Cloud Services",
    skills: [
      { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
      { name: 'Azure', icon: <VscAzure className="text-blue-500" />, isPrimary: true },
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
      { name: 'Git', icon: <FaGitAlt className="text-red-500" />, isPrimary: true },
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
      { name: 'OpenCV', icon: <SiOpencv className="text-purple-500" /> },
    ]
  },
];

function SkillItem({ skill }) { 
  const { name, icon, isPrimary } = skill;

  const itemClasses = `
    relative // 부모 요소에 relative 추가 (배지 위치 잡기 위해)
    bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center
  `;

  return (
    <div className={itemClasses} data-aos="fade-up">
      {isPrimary && (
        <FaStar
          className="absolute top-2 right-2 text-yellow-400 w-4 h-4" 
          title="주력 기술" 
        />
      )}
      <div className="text-4xl mb-2">
        {icon ? React.cloneElement(icon, { className: `${icon.props.className || ''} w-10 h-10` }) : <FaBrain />}
      </div>
      <p className="text-md font-medium text-gray-700 dark:text-gray-300">{name}</p>
    </div>
  );
}


function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl w-full text-center">
        <h2 /* ... */>프로젝트에 적용해 봤거나 학습 및 실습한 기술들입니다.</h2>
        {/* Optional: 별표 의미 설명 추가 */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12" data-aos="fade-up" data-aos-delay="150">
           (<FaStar className="inline-block text-yellow-400 w-3 h-3 mx-1" /> 표시는 주요 사용 기술 또는 자신 있는 기술입니다.)
        </p>


        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12" data-aos="fade-up" data-aos-delay={150 + (categoryIndex * 50)}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {category.title}
            </h3>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            >
              {/* skill 객체 전체를 SkillItem에 전달 */}
              {category.skills.map((skill) => ( // skillIndex는 이제 필요 없음
                <SkillItem
                  key={skill.name}
                  skill={skill} // skill 객체 자체를 prop으로 전달
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