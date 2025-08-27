import React from "react";
import { Code, Coffee, Heart, Users } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { icon: Code, value: "10+", label: "Projects Completed" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Heart, value: "6+", label: "Years Experience" },
    { icon: Users, value: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {/* Passionate Developer & Problem Solver */}
              Professional Summary
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-justify">
                Highly skilled Software Engineer with 6+ years of expertise in
                designing, developing, and delivering robust applications using
                Angular, JavaScript, Java, and Node.js. Proficient in leveraging
                frameworks, design patterns, AWS cloud services, RESTful APIs,
                and database management to build scalable solutions. Since 2017,
                I have honed my programming skills across diverse domains,
                consistently delivering high-performance applications in
                fast-paced tech environments.
              </p>
              <p className="text-justify">
                I believe in writing clean, maintainable code and am passionate
                about user experience design. When I'm not coding, you'll find
                me contributing to open-source projects, mentoring junior
                developers, or exploring the latest tech trends.
              </p>
              <p className="text-justify">
                My approach combines technical expertise with creative
                problem-solving, ensuring that every project not only meets
                requirements but exceeds expectations in performance and user
                satisfaction.
              </p>
            </div>

            {/* Personal Interests */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                When I'm not coding:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Photography",
                  "Watching movies",
                  "Playing Football",
                  "Cooking",
                  "Traveling",
                  "Reading",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            My Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "I believe in delivering high-quality solutions that stand the test of time.",
                icon: "🎯",
              },
              {
                title: "Continuous Learning",
                description:
                  "Technology evolves rapidly, and I stay ahead by constantly learning new skills.",
                icon: "📚",
              },
              {
                title: "Collaboration",
                description:
                  "Great products are built by great teams. I value open communication and teamwork.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
