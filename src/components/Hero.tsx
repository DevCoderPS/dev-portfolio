import React from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bg-purple-300 rounded-full top-20 left-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bg-yellow-300 rounded-full top-40 right-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-pink-300 rounded-full -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          {/* Content */}
          <div className="text-center lg:w-1/2 lg:text-left">
            <div className="mb-6">
              <h1 className="mb-4 text-5xl font-bold text-gray-900 lg:text-6xl animate-fade-in">
                Hi, I'm{" "}
                <span className="text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                  Pyae Sone Win
                </span>
              </h1>
              <div className="mb-6 text-xl text-gray-600 animate-fade-in-delay">
                <span className="typing-text">
                  Full-Stack Software Developer
                </span>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 animate-fade-in-delay-2">
                I craft beautiful, scalable web applications with modern
                technologies. Passionate about clean code, user experience, and
                turning ideas into reality.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 mb-8 sm:flex-row animate-fade-in-delay-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 font-semibold text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-xl hover:scale-105"
              >
                View My Work
              </button>
              <a
                href="https://www.dropbox.com/scl/fi/dls7jjg8mij9ojtiun90h/Resume.pdf?rlkey=7ffsuzx7a0049nd96bino2l82&st=tnq1e42i&dl=1"
                download
                className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-indigo-600 transition-all duration-300 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 lg:justify-start animate-fade-in-delay-4">
              <a
                href="https://github.com/DevCoderPS"
                className="text-gray-600 transition-all duration-300 transform hover:text-indigo-600 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pyae-sone-win-software-developer/"
                className="text-gray-600 transition-all duration-300 transform hover:text-indigo-600 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:awin.pyaesonewin@gmail.com"
                className="text-gray-600 transition-all duration-300 transform hover:text-indigo-600 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mt-12 lg:w-1/2 lg:mt-0">
            <div className="relative">
              <div className="overflow-hidden border-8 border-white rounded-full shadow-2xl w-80 h-80 animate-float">
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/ep8yia90lkqprct0cejrz/IMG_4611.JPG?rlkey=kcebcov20maipxqbtqcgbrumj&st=0esjwdfz&dl=1"
                  alt="Alex Chen"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute flex items-center justify-center w-24 h-24 text-lg font-bold text-white rounded-full -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse">
                👋
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-gray-600 transition-colors duration-300 hover:text-indigo-600"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
