import React from "react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "React", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "Next.js", level: 80, color: "from-gray-700 to-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-teal-600" },
        { name: "Angular", level: 50, color: "from-green-500 to-green-600" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-600 to-green-700" },
        { name: "NestJS", level: 85, color: "from-green-600 to-green-700" },
        { name: "Java", level: 85, color: "from-green-600 to-green-700" },
        { name: "Python", level: 55, color: "from-yellow-500 to-yellow-600" },
        { name: "MySQL", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "MongoDB", level: 85, color: "from-green-500 to-green-600" },
        { name: "MSSQL", level: 90, color: "from-blue-600 to-blue-700" },
        { name: "Redis", level: 85, color: "from-blue-600 to-blue-700" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 93, color: "from-orange-500 to-orange-600" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 60, color: "from-yellow-500 to-orange-500" },
        { name: "Figma", level: 70, color: "from-purple-500 to-purple-600" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and
            proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out skill-bar`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Professional Java Development",
                issuer: "Brighter Myanmar",
                year: "2017",
              },
              {
                title: "Complete Python Bootcamp From Zero to Hero in Python",
                issuer: "Udemy",
                year: "2021",
              },
              {
                title:
                  "Infrastructure as Code, Master AWS Cloud Development Kit CDK",
                issuer: "Udemy",
                year: "2021",
              },
              {
                title: "AWS Essentials",
                issuer: "Udemy",
                year: "2021",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-indigo-600 font-medium">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
