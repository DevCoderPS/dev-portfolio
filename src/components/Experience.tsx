import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience: React.FC = () => {
  // const experiences = [
  //   {
  //     company: "TechCorp Solutions",
  //     position: "Senior Full-Stack Developer",
  //     location: "San Francisco, CA",
  //     period: "2022 - Present",
  //     description:
  //       "Lead development of scalable web applications serving 100K+ users. Architect and implement microservices using React, Node.js, and AWS. Mentor junior developers and conduct code reviews.",
  //     achievements: [
  //       "Improved application performance by 40% through optimization",
  //       "Led a team of 5 developers on critical product features",
  //       "Implemented CI/CD pipelines reducing deployment time by 60%",
  //       "Introduced testing practices increasing code coverage to 90%",
  //     ],
  //     technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  //     website: "https://techcorp.com",
  //   },
  // ];
  const experiences = [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      location: "Remote",
      period: "Apr 2025 - Present",
      description:
        "Architected and built complete systems from scratch, leading full development lifecycle from requirements gathering to production deployment.",
      achievements: [
        "Architected and built from scratch a complete Tour Management System using React.js, NestJS, MongoDB, and Redis",
        "Led the full development lifecycle from requirements gathering to production deployment",
        "Implemented clean architecture patterns ensuring maintainability and scalability",
      ],
      technologies: ["React.js", "NestJS", "MongoDB", "Redis", "TailwindCSS"],
      website: null,
    },
    {
      company: "Myanmar Oplans Co.,Ltd",
      position: "Software Engineer",
      location: "Myanmar",
      period: "Aug 2023 - Feb 2025",
      description:
        "Full-stack development of enterprise management systems, collaborating with international stakeholders and ensuring high-quality deliverables.",
      achievements: [
        "Developed and maintained both front-end and back-end components for Clothing Industry Management System",
        "Designed and managed MSSQL databases for efficient data storage and retrieval",
        "Collaborated with Japanese stakeholders to align development with business requirements",
        "Conducted software testing to ensure high-quality deliverables",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Java Spring Boot",
        "MySQL",
        "MSSQL",
      ],
      website: null,
    },
    {
      company: "TEC LINK Myanmar",
      position: "Software Engineer",
      location: "Myanmar",
      period: "May 2023 - Jul 2023",
      description:
        "Backend development focusing on scalable RESTful APIs and system performance optimization.",
      achievements: [
        "Designed and developed scalable RESTful APIs using Node.js and MySQL",
        "Performed rigorous API testing and debugging, ensuring high reliability and performance",
        "Collaborated with the team to resolve critical bugs and implement performance optimizations",
      ],
      technologies: ["Node.js", "MySQL", "RESTful APIs"],
      website: null,
    },
    {
      company: "NINETY FIVE Group",
      position: "Software Developer",
      location: "Myanmar",
      period: "Feb 2023 - Apr 2023",
      description:
        "Frontend development with focus on responsive design and efficient data integration.",
      achievements: [
        "Developed responsive and interactive frontend components using Next.js",
        "Integrated frontend with MySQL for efficient data management and retrieval",
        "Maintained clean, modular code and resolved critical bugs, enhancing system stability",
      ],
      technologies: ["Next.js", "MySQL", "Frontend Development"],
      website: null,
    },
    {
      company: "SystemEXE Myanmar",
      position: "Software Engineer",
      location: "Myanmar",
      period: "May 2019 - Jan 2022",
      description:
        "Full-stack development across multiple projects including international collaboration with Japanese clients.",
      achievements: [
        "Built cross-platform solutions using Flutter (Web) + Python and Angular + Java + MySQL",
        "Led the end-to-end development lifecycle, from requirement analysis to deployment",
        "Developed Angular-based applications for Japanese clients, ensuring compliance with project requirements",
        "Gained exposure to international workflows and client communication",
      ],
      technologies: ["Flutter", "Angular", "Python", "Java", "MySQL", "AWS"],
      website: null,
    },
    {
      company: "Freelance",
      position: "Software Developer",
      location: "Remote",
      period: "Mar 2019 - May 2019",
      description:
        "End-to-end feature development and system enhancement for Point of Sale systems.",
      achievements: [
        "Developed end-to-end features for POS System using React and Spring Boot",
        "Resolved defects and enhanced system functionality",
        "Gained hands-on experience with React.js and backend API integration",
      ],
      technologies: ["React", "Spring Boot", "MySQL", "Full-Stack Development"],
      website: null,
    },
    {
      company: "Ability Software Services Co., Ltd.",
      position: "Software Developer",
      location: "Myanmar",
      period: "Dec 2017 - Nov 2018",
      description:
        "Full-stack development across various business systems including banking, task management, and accounting applications.",
      achievements: [
        "Designed and generated complex financial reports for banking operations using Jasper Report",
        "Developed end-to-end features for ToDo Management System",
        "Built robust accounting modules and automated financial processes",
        "Improved system efficiency through process automation",
      ],
      technologies: ["Java", "Jasper Report", "Full-Stack Development"],
      website: null,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey through different roles and companies, building expertise
            and delivering results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content Card */}
              <div className="ml-16 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {experience.position}
                      </h3>
                      {experience.website && (
                        <a
                          href={experience.website}
                          className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <h4 className="text-xl text-indigo-600 font-semibold mb-3">
                      {experience.company}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {experience.achievements.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Throughout my career, I've maintained a commitment to continuous
              learning and staying current with emerging technologies. I
              regularly attend conferences, contribute to open-source projects,
              and share knowledge through technical blog posts and mentoring.
            </p>
            {/* <div className="flex justify-center gap-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">15+</div>
                <div>Conferences Attended</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">25+</div>
                <div>Open Source Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">10+</div>
                <div>Developers Mentored</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
