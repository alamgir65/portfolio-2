"use client";

import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import * as React from "react";

interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
  color: string;
  githubLink: string;
  liveLink: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  skills: string[];
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "HomeNext",
    description: "TWide range of properties — apartments, houses, commercial spaces & land Prime locations across Dhaka (Gulshan, Dhanmondi, Uttara, etc.).All properties are newly built and ready to move in.Modern, eco-friendly designs with smart home features. Premium amenities like parking, security, and rooftop gardens. Verified listings with trusted sellers and clear documents. Excellent city connectivity and convenient surroundings. Developed by reliable and reputed real estate professionals.",
    skills: ["expressjs", "nodejs", "react","tailwind", "vercel","mongodb"],
    link: "/projects/project1.JPG",
    color: "#0be890",
    githubLink: "https://github.com/alamgir65/LeafyLane-client",
    liveLink: "https://leafylane-3be24.web.app/",
  },
  {
    title: "Folmon.com",
    description: "Folmondi.com is a full-stack fresh produce e-commerce platform built for Bangladesh, featuring a seamless ordering flow with categorized fruits, honey & organic products sourced directly from farms, real-time MongoDB-backed inventory, bKash & Cash on Delivery via SSLCommerz, and a complete customer experience including cart management, District/Upazila checkout, live order tracking, and profile with order history — paired with a powerful Admin Dashboard for product CRUD via Cloudinary, order management, delivery tracking, revenue analytics, and a real-time customer feedback system.",
    skills: ["nextjs", "nodejs", "react", "tailwind", "mongodb", "vercel", "ssl"],
    link: "/projects/project2.JPG",
    color: "#ff6b35",
    githubLink: "https://github.com/alamgir65/folmondi.com-client",
    liveLink: "https://the--canvas.vercel.app/",
  }
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = (): void => {
      const isTargetResolution: boolean =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <div className="bg-transparent relative min-h-screen">
      <div className="relative z-10">
        <ReactLenis root>
          <div className="bg-transparent relative z-10 min-h-screen pt-12" ref={container}>
            <div className="text-white w-full bg-transparent">
              <div className="text-center mb-0 pt-32">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  PROJECTS
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                  Showcasing my Technical Projects & Creative Solutions
                </p>
              </div>
              {projects.map((project: Project, i: number) => {
                const targetScale: number = 1 - (projects.length - i) * 0.05;
                return (
                  <Card
                    key={`p_${i}`}
                    i={i}
                    url={project.link}
                    title={project.title}
                    color={project.color}
                    description={project.description}
                    skills={project.skills}
                    progress={scrollYProgress}
                    range={[i * 0.25, 1]}
                    targetScale={targetScale}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                  />
                );
              })}
            </div>
          </div>
        </ReactLenis>
      </div>
    </div>
  );
}

function Card({
  i,
  title,
  description,
  skills,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}: CardProps) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={`h-screen flex items-center justify-center sticky top-0 project-container ${i === 0 ? 'mt-0' : ''}`}
    >
      <motion.div
        style={{
          scale,
          top: i === 0 ? "0" : `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: i === 0 ? "0" : "var(--project-margin, 0)",
        }}
        className={`relative ${i === 0 ? 'top-0' : '-top-[25%]'} h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card`}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundColor: '#574A49' }}
          whileHover={{
            boxShadow: `0 0 30px -5px ${color}40`,
            transition: { duration: 0.4 }
          }}
        >
          <div className="w-full md:w-[55%] flex flex-col">
            <div className="h-[200px] md:h-[300px] lg:h-[340px] relative overflow-hidden">
              <motion.img
                src={url}
                alt={title}
                className="w-full h-full object-contain"
                initial={{ scale: 0.85 }}
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
              />

              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/50 backdrop-blur-md text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium">
                Project {i + 1}
              </div>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex items-center justify-center flex-wrap gap-1.5 px-3 py-1 bg-[#574A49]">
              {(() => {
                const customIcons: Record<string, { src: string; alt: string; bg: string; cls: string }> = {
                  socket: { src: "/icons/socket.svg", alt: "Socket", bg: "bg-white", cls: "w-full h-full object-contain" },
                  ssl: { src: "/icons/ssl.jpg", alt: "SSLCommerz", bg: "bg-white", cls: "w-full h-full object-contain" },
                  render: { src: "/icons/render.svg", alt: "Render", bg: "bg-white", cls: "w-full h-full object-contain" },
                  clerk: { src: "/icons/tools/clerk.svg", alt: "Clerk", bg: "bg-[#1C1C1E]", cls: "w-4 h-4 md:w-6 md:h-6" },
                };
                const elements: React.ReactNode[] = [];
                let batch: string[] = [];
                const flushBatch = (key: string) => {
                  if (batch.length > 0) {
                    elements.push(
                      <img key={key} src={`https://skillicons.dev/icons?i=${batch.join(',')}`} alt="Tech Stack" className="h-6 md:h-8 w-auto" loading="lazy" />
                    );
                    batch = [];
                  }
                };
                skills.forEach((skill, idx) => {
                  const s = skill.toLowerCase();
                  if (s === 'gsap') {
                    flushBatch(`batch-${idx}`);
                    elements.push(
                      <div key={idx} className="h-8 w-auto md:h-10.5 md:w-auto flex items-center justify-center mx-1">
                        <img src="/icons/gsap.png" alt="GSAP" className="h-full w-auto object-contain scale-[1.2] md:scale-[1.3]" />
                      </div>
                    );
                    return;
                  }
                  const icon = customIcons[s];
                  if (icon) {
                    flushBatch(`batch-${idx}`);
                    elements.push(
                      <div key={idx} className={`h-6 w-6 md:h-8 md:w-8 ${icon.bg} rounded flex items-center justify-center ${s !== 'clerk' ? 'p-1' : ''}`}>
                        <img src={icon.src} alt={icon.alt} className={icon.cls} />
                      </div>
                    );
                  } else {
                    batch.push(skill);
                  }
                });
                flushBatch('batch-end');
                return elements;
              })()}
            </div>

            {/* GitHub & Live Link */}
            <div className="flex items-center justify-center gap-3 py-2 md:py-3 bg-[#574A49]">
              <motion.a
                title="GitHub Link"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-none bg-green-500/15 hover:bg-green-500/50 border border-black transition-all cursor-pointer"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ pointerEvents: "all" }}
              >
                <img src="/github.svg" alt="GitHub" width={18} height={18} className="inline-block align-middle" />
                <span className="text-xs md:text-sm font-medium text-[#7fe525] ubuntu-font">Code</span>
              </motion.a>

              <motion.a
                title="Live Link"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-none bg-blue-500/25 hover:bg-blue-500/55 border border-black transition-all cursor-pointer"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ pointerEvents: "all" }}
              >
                <img src="https://img.icons8.com/glyph-neue/64/1A1A1A/globe--v1.png" alt="Live" width={19.5} height={19.5} className="inline-block align-middle" />
                <span className="text-xs md:text-sm font-medium text-[#7fe525] ubuntu-font">Live</span>
              </motion.a>
            </div>
          </div>

          <div className="w-full md:w-[45%] p-4 pt-2 md:p-6 md:pt-3 lg:p-8 lg:pt-4 flex flex-col justify-between relative">
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4" style={{ fontFamily: 'var(--font-ubuntu), sans-serif' }}>
                {title}
              </h2>
              <p className="text-xs md:text-base text-[#121111] font-semibold leading-snug mb-3 whitespace-pre-line min-h-[120px] md:min-h-[200px] lg:min-h-[240px]" style={{ fontFamily: 'var(--font-bricolage-grotesque), sans-serif' }}>{description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}