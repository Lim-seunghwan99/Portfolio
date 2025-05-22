// src/App.js
import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  // 네비게이션 바 높이 (offset 계산시 참고)
  const navHeight = 64; // h-16은 4rem = 64px

  return (
    <div className="bg-gray-100">
      {/* Navigation Bar - 수정된 부분 */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm text-white shadow-md z-50"> {/* 다시 w-full, left-0 */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* 콘텐츠 영역 제한 및 좌우 패딩 */}
          <div className="flex justify-between items-center h-16"> {/* Flexbox 사용: 양쪽 정렬, 수직 중앙, 고정 높이 */}

            {/* Left Side: Name and Portfolio */}
            <div className="flex-shrink-0"> {/* 내용이 길어져도 줄어들지 않도록 */}
              <Link
                to="home" // 클릭 시 Home 섹션으로 이동
                smooth={true}
                duration={500}
                offset={-navHeight} // 네비게이션 높이만큼 오프셋
                className="text-xl font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-300"
              >
                Lim Seung Hwan
                <span className="font-light hidden sm:inline"> | Portfolio</span> {/* 화면 작을 때 Portfolio 숨김 (선택 사항) */}
              </Link>
            </div>

            {/* Right Side: Navigation Links */}
            <div>
              <ul className="flex items-center space-x-4 md:space-x-6"> {/* 링크 간 간격 조정 */}
                <li>
                  <Link
                    activeClass="text-blue-500"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-navHeight} // 오프셋 적용
                    className="hover:text-blue-400 cursor-pointer transition-colors duration-300 px-2 py-2 text-sm sm:text-base" // 패딩 및 반응형 텍스트 크기
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-blue-500"
                    to="about" // Target the id="about" section
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-navHeight} // Adjust offset as needed
                    className="hover:text-blue-400 cursor-pointer transition-colors duration-300 px-2 py-2 text-sm sm:text-base"
                  >
                    About {/* Link Text */}
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-blue-500"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-navHeight}
                    className="hover:text-blue-400 cursor-pointer transition-colors duration-300 px-2 py-2 text-sm sm:text-base"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-blue-500"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-navHeight}
                    className="hover:text-blue-400 cursor-pointer transition-colors duration-300 px-2 py-2 text-sm sm:text-base"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="text-blue-500"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-navHeight}
                    className="hover:text-blue-400 cursor-pointer transition-colors duration-300 px-2 py-2 text-sm sm:text-base"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>

      {/* Page Sections */}
      {/* Home 섹션에 pt-16 (네비게이션 높이만큼) 추가 */}
      <main>
        {/* Home 컴포넌트 자체에서 pt-16을 주거나 여기서 div로 감싸서 pt-16을 줄 수 있습니다. */}
        {/* Home 컴포넌트 내부 수정이 더 깔끔합니다. Home.js의 <section>에 pt-16 클래스를 추가하세요. */}
        <Home />
        <About/>
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Optional Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        © {new Date().getFullYear()} Lim Seung Hwan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;