import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ChevronRight, ArrowRight } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiSwift,
  SiFlutter,
  SiKotlin,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiExpress,
  SiResend,
} from "react-icons/si";
import profile from "../assets/me.jpeg";
import oagexplore from "../assets/oag.png";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Swift", icon: SiSwift, color: "#FA7343" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#7F52FF" },
  ];

  const projects = [
    {
      title: "Task Management Dashboard",
      description:
        "Full-stack task tracking app with real-time updates and collaborative features",
      stack: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Weather Forecast App",
      description:
        "Clean, minimalist weather application with location-based forecasts",
      stack: ["Flutter", "REST API"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
              >
                Ryan Schock
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-2xl sm:text-3xl text-foreground/70 mb-6 font-medium"
              >
                Software Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl"
              >
                Software developer building intuitive mobile and web
                applications with modern technologies. Proven experience leading
                development projects from concept to delivery, including a top 3
                finish out of 110 teams for OAG Explore, a wayfinding web
                experience built for the Ottawa Art Gallery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                >
                  View Projects
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ryanjmschock/"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white border-2 border-border text-foreground rounded-xl font-medium hover:border-primary hover:text-primary hover:shadow-lg transition-all"
                >
                  Connect on Linkedin
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-3xl" />
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-border/50">
                  <img
                    src={profile}
                    alt="Ryan Schock - Software Developer"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex justify-center gap-4 mt-8"
              >
                <motion.a
                  href="https://github.com/scho0124"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-12 h-12 bg-white border-2 border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ryanjmschock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-12 h-12 bg-white border-2 border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:ryanjms613@gmail.com"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-12 h-12 bg-white border-2 border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 lg:py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-16"
          >
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 border border-border shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      <Icon
                        className="w-8 h-8 transition-all duration-300"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section
        id="projects"
        className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Featured Project
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              OAG Explore
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl overflow-hidden border border-border shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <p className="text-primary font-medium mb-2">
                    Development Lead
                  </p>
                </div>

                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  Led a 4-month collaborative project to design and build a
                  comprehensive mobile frist wayfinding web application for the
                  Ottawa Art Gallery. The app helps visitors navigate the
                  gallery space, discover exhibits, and enhance their museum
                  experience. The app also expands the gallery's digital
                  tooling, including a fully automated reporting pipeline to
                  deliver actionable visitor insights including satisfaction and
                  QR code analytics indicating areas that could benefit from
                  improved signage.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl p-6 mb-8">
                  <p className="text-foreground font-medium flex items-center gap-2">
                    Placed 3rd out of 110 projects at the applied research day.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
                      <SiReact className="w-6 h-6 text-blue-300" />
                      React
                    </span>
                    <span className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
                      <SiExpress
                        style={{ color: "#02569B" }}
                        className="w-6 h-6"
                      />
                      Express
                    </span>
                    <span className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm">
                      <SiResend style={{ color: "#333" }} className="w-6 h-6" />
                      Resend
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium inline-flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all w-fit"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="relative h-full min-h-[400px] lg:min-h-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50" />
                <img
                  src={oagexplore}
                  alt="OAG Explore, a wayfinding solution built for the Ottawa Art Gallery."
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-16"
          >
            Additional Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={`#project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <motion.div
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  View Project
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center">
            <div className="flex gap-6 mb-8">
              <motion.a
                href="https://github.com/scho0124"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ryanjmschock/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:ryanjms613@gmail.com"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              © 2026 Ryan Schock · Built with React & TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
