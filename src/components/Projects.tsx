import React, { useState } from "react";
import { Github, ExternalLink, Calendar, Tag } from "lucide-react";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Tour Management System",
      description:
        "Architected and built a complete Tour Management System from scratch. Led the full development lifecycle from requirements gathering to production deployment, implementing clean architecture patterns for maintainability and scalability.",
      image:
        "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "fullstack",
      technologies: ["React", "NestJS", "MongoDB", "Redis", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      featured: true,
    },
    {
      id: 2,
      title: "User Management System",
      description:
        "Designed and developed a comprehensive User Management System from the ground up. Implemented secure authentication, role-based access control, user profiles, and administrative dashboard features with a focus on security and scalability.",
      image:
        "https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      featured: true,
    },
    {
      id: 3,
      title: "To-Do Management System",
      description:
        "Engineered a full-featured To-Do Management System with intuitive task organization. Implemented features including task creation, prioritization, due dates, categories, and real-time updates with a clean, responsive interface.",
      image:
        "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "fullstack",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      featured: false,
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description:
        "Built a full-stack real-time messaging platform with instant message delivery, online status indicators, and group chat capabilities. Features include user authentication, message history, typing indicators, and responsive design for seamless communication across devices.",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "fullstack",
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/yourusername/realtime-chat-app",
      liveUrl: "https://your-chat-app.vercel.app",
      date: "2024",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark mode toggle, and optimized performance.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 ${
                project.featured ? "ring-2 ring-indigo-500" : ""
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                  ⭐ Featured Project
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag size={14} className="mr-1" />
                    {project.category}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
