"use client";
import React from "react";

import { Card, CardContent } from "@/app/components/card";
import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";

const IconCloudDemo = dynamic(() => import("@/app/components/globe"), { ssr: false });

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  color: string;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const containerVariants: Variants = {
  hidden: { opacity: 1 },              //cascade cards animation
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {    //Flip-effect
  hidden: {
    opacity: 0,
    rotateX: -90,
    y: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      mass: 1
    }
  },
};


//Single Card Component
const SkillCard: React.FC<SkillCardProps> = ({ title, skills, color }) => (
  <motion.div variants={cardVariants} className="h-full" style={{ transformStyle: 'preserve-3d' }}>
    <Card className="group h-full relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
      <CardContent className="p-3 md:p-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3 md:mb-6 w-full">
          <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-center" style={{ color: '#A8325A', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center w-full [&_img]:h-6 [&_img]:w-auto md:[&_img]:h-12">
          {skills.map((skill, index) => (
            <div key={index} className="relative group/skill flex items-center justify-center">
              <div className="transition-transform duration-300 group-hover/skill:-translate-y-1 cursor-none">
                {skill.icon}
              </div>
            </div>
          ))}            {/* Skill Icons Grid*/}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "FRONTEND",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <img src="/icons/frontend/react.svg" alt="React" /> },
        { name: "HTML5", icon: <img src="/icons/frontend/html.svg" alt="HTML5" /> },
        { name: "CSS3", icon: <img src="/icons/frontend/css.svg" alt="CSS3" /> },
        { name: "JavaScript", icon: <img src="/icons/frontend/javascript.svg" alt="JavaScript" /> },
        { name: "TypeScript", icon: <img src="/icons/frontend/typescript.svg" alt="TypeScript" /> },
        { name: "Tailwind CSS", icon: <img src="/icons/frontend/tailwind.svg" alt="Tailwind CSS" /> },
      ],
    },
    {
      title: "BACKEND",
      color: "text-purple-400",
      skills: [
        { name: "Node.js", icon: <img src="/icons/backend/nodejs.svg" alt="Node.js" /> },
        { name: "Express.js", icon: <img src="/icons/backend/express.svg" alt="Express.js" /> },
        { name: "Python", icon: <img src="/icons/backend/python.svg" alt="Python" /> },
        { name: "FASTapi", icon: <img src="/icons/backend/fastapi.svg" alt="FASTapi" /> },
      ],
    },
    {
      title: "DATABASE",
      color: "text-green-400",
      skills: [
        { name: "Supabase", icon: <img src="/icons/database/supabase.svg" alt="Supabase" /> },
        { name: "Firebase", icon: <img src="/icons/database/firebase.svg" alt="Firebase" /> },
        { name: "MongoDB", icon: <img src="/icons/database/mongodb.svg" alt="MongoDB" /> },
        { name: "Prisma", icon: <img src="/icons/database/prisma.svg" alt="Prisma" /> },
        { name: "Neon", icon: <img src="/icons/database/neon.svg" alt="Neon" /> },
        { name: "Redis", icon: <img src="/icons/database/redis.svg" alt="Redis" /> },
      ],
    },
    {
      title: "DEVOPS",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <img src="/icons/cloud/aws.svg" alt="AWS" /> },
        { name: "Docker", icon: <img src="/icons/cloud/docker.svg" alt="Docker" /> },
        { name: "Cloudflare", icon: <img src="/icons/cloud/cloudflare.svg" alt="Cloudflare" /> },
        { name: "GitHub", icon: <img src="/icons/cloud/github.svg" alt="GitHub" /> },
        { name: "Google Cloud", icon: <img src="/icons/cloud/gcp.svg" alt="Google Cloud" /> },
      ],
    },
    {
      title: "TOOLS",
      color: "text-pink-400",
      skills: [
        { name: "Git", icon: <img src="/icons/tools/git.svg" alt="Git" /> },
        { name: "Atlassian", icon: <img src="/icons/tools/atlassian.svg" alt="Atlassian" /> },
        { name: "Authjs", icon: <img src="/icons/tools/authjs.svg" alt="Authjs" /> },
        { name: "Clerk", icon: <img src="/icons/tools/clerk.svg" alt="Clerk" /> },
        { name: "Postman", icon: <img src="/icons/tools/postman.svg" alt="Postman" /> },
        { name: "Playwright", icon: <img src="/icons/tools/playwright.svg" alt="Playwright" width={50} height={50} /> },
      ],
    },
    {
      title: "UI/UX",
      color: "text-yellow-400",
      skills: [
        { name: "Figma", icon: <img src="/icons/ui/figma.svg" alt="Figma" width={46} height={46} /> },
        { name: "Canva", icon: <img src="/icons/ui/canva.svg" alt="Canva" width={35} height={43} /> },
        { name: "Photoshop", icon: <img src="/icons/ui/ps.svg" alt="Photoshop" /> },
        { name: "Framer", icon: <img src="/icons/ui/framer.svg" alt="Framer" /> },
        { name: "Webflow", icon: <img src="/icons/ui/webflow.svg" alt="Webflow" width={41} height={41} /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-transparent relative z-10">

      <section className="container mx-auto px-4 py-11 relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -10, 0]
          }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.6, type: "spring", stiffness: 200 },
            rotate: { duration: 0.6, type: "spring", stiffness: 200 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex justify-center items-center"
        >
          <IconCloudDemo />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{ perspective: "1000px" }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </motion.div>      {/* keyframe animation */}
      </section>
      <style jsx>{`          
        @keyframes shimmer {                           
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;