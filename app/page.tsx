"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "UI/UX Design", level: 92 },
    { name: "Flutter", level: 82 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Git", level: 88 },
  ];

  const projects = [
    {
      title: "CRM Truck Route Manager",
      description:
        "Comprehensive CRM platform for managing truck routes, order distribution, and logistics operations. Features real-time tracking, route optimization, and delivery management dashboard.",
      image: "/dash1.png?height=300&width=500",
      tags: ["React", "Next.js"],
      link: "#",
      github: "#",
    },
    {
      title: "Personal Finance Manager",
      description:
        "Mobile application for managing and organizing personal finances with expense tracking, budget planning, and financial goal setting. Features secure data sync and intuitive spending analytics.",
      image: "/mob.jpg?height=300&width=500",
      tags: ["Flutter", "Firebase"],
      link: "#",
      github: "#",
    },
    {
      title: "Design System",
      description:
        "Comprehensive design system with reusable components and documentation for enterprise applications.",
      image: "/images/design-system.png",
      tags: ["Figma", "Storybook", "React", "TypeScript"],
      link: "#",
      github: "#",
    },
  ];

  const experience = [
    {
      title: "Independent Web & Mobile Developer",
      company: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description:
        "Providing comprehensive web and mobile development services to diverse clients. Specializing in responsive web applications using React and Next.js, and cross-platform mobile apps with Flutter. Managing full project lifecycles from concept to deployment, ensuring optimal user experience and performance across all platforms.",
    },
    {
      title: "Mobile Developer",
      company: "Mobile City",
      period: "2021 - 2023",
      location: "Remote",
      description:
        "Developed cross-platform mobile applications using Flutter and Dart, delivering high-performance apps for Android and iOS. Built intuitive user interfaces, integrated RESTful APIs, and optimized app performance. Collaborated with designers, product managers, and QA teams to deliver user-centered solutions aligned with business objectives.",
    },
    {
      title: "Frontend Developer",
      company: "Vission Solutions",
      period: "2020 - 2021",
      location: "Remote",
      description:
        "Designed and developed responsive landing pages and websites using HTML, CSS, JavaScript, React, and Vue. Focused on performance optimization, cross-browser compatibility, and mobile responsiveness. Collaborated with designers and back-end developers to ensure cohesive user experiences and consistent brand implementation.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  UI/UX Designer &{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I create beautiful, functional, and user-centered digital
                  experiences for web and mobile platforms.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-gray-800 text-gray-200 border-gray-700"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Web Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-gray-800 text-gray-200 border-gray-700"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile Apps
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-gray-800 text-gray-200 border-gray-700"
                >
                  <Palette className="w-4 h-4 mr-2" />
                  UI/UX Design
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:rogerdt05@gmail.com?subject=Project Inquiry&body=Hi, I'm interested in discussing a project with you.">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.canva.com/design/DAF-rLDo4-s/vN15s6MR_H579fV1LodfLA/edit?utm_content=DAF-rLDo4-s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>

              <div className="flex gap-6">
                <a
                  href="https://github.com/dtfndan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oscar-fanfan-94056a268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:rogerdt05@gmail.com?subject=Contact from Portfolio&body=Hi, I'd like to get in touch with you."
                  className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="tel:+18493776034"
                  className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-[200px] h-[200px] mx-auto rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                  <Image
                    src="/placeholder-user.jpg?height=500&width=500"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 5 years of experience in UI/UX design and web
                development, I specialize in creating intuitive and engaging
                digital experiences. My expertise spans across modern web
                technologies, mobile app development, and user-centered design
                principles.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the power of good design to solve complex problems
                and create meaningful connections between users and technology.
                Every project I work on is an opportunity to push boundaries and
                deliver exceptional results.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group">
                <Code2 className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">
                  Web Development
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Modern web applications with React, Next.js, and TypeScript
                </p>
              </Card>
              <Card className="p-6 text-center bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 group">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="font-semibold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-300">
                  Mobile Apps
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Cross-platform mobile applications with Flutter
                </p>
              </Card>
              <Card className="p-6 text-center bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105 group">
                <Palette className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">
                  UI/UX Design
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  User-centered design with Figma and design systems
                </p>
              </Card>
              <Card className="p-6 text-center bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 group">
                <Globe className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="font-semibold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-300">
                  Web Design
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Responsive and accessible web interfaces
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">Some of my recent work</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden bg-gray-800/80 border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/dash.png"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    {project.title}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-purple-400 hover:scale-110 hover:bg-gray-700/50 transition-all duration-300"
                        asChild
                      >
                        <Link href={project.link}>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-cyan-400 hover:scale-110 hover:bg-gray-700/50 transition-all duration-300"
                        asChild
                      >
                        <Link href={project.github}>
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-200 border-gray-600"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-300">My professional journey</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-shadow bg-gray-800/80 border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-purple-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-300 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 via-gray-900 to-cyan-900"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:shadow-white/25 transition-all duration-300"
              asChild
            >
              <a href="mailto:rogerdt05@gmail.com?subject=Project Collaboration&body=Hi, I'm interested in working with you on a project. Let's discuss the details.">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent hover:scale-105 hover:shadow-lg hover:shadow-white/25 transition-all duration-300"
              asChild
            >
              <a
                href="https://meet.google.com/new?authuser=rogerdt05@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/dtfndan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/oscar-fanfan-94056a268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rogerdt05@gmail.com?subject=Portfolio Contact&body=Hi, I found your portfolio and would like to connect with you."
              className="text-gray-300 hover:text-purple-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+18493776034"
              className="text-gray-300 hover:text-cyan-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Call me directly</p>
            <a
              href="tel:+18493776034"
              className="text-lg font-semibold text-white hover:text-cyan-300 hover:scale-105 transition-all duration-300 inline-block px-4 py-2 rounded-lg hover:bg-white/10"
            >
              +1 (849) 377-6034
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto"></div>
      </footer>
    </div>
  );
}
