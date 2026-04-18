"use client";

import { useEffect } from 'react';
import Navbar from './Navbar';
import { useIsMobile } from '../lib/useIsMobile';
import Head from 'next/head';
import Image from 'next/image';
import { FlipWords } from './components/flip-words';
import { motion, Variants } from 'framer-motion';

// IMPORTING SECTIONS
import BookshelfSection from './components/BookshelfSection';
import About from './sections/About';
import SkillsPage from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contacts';
import CpSection from './sections/Cp';

export default function Home() {
  const words = [
    "Web Developer | MERN ",
    "Competitive Programmer",
    "Let's Build Something Amazing Together !",
  ];

  const isMobile = useIsMobile(640);

  // FORCE SCROLL TO TOP ON RELOAD
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <>

      <div className="relative min-h-screen text-white bg-transparent overflow-x-clip">
        <Navbar />

        <main className="min-h-screen relative z-10 pt-32">

          {/* HERO SECTION */}
          <section id="home">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="flex min-h-[65vh] items-center">

                {/* Hero Text */}
                <motion.div
                  className="w-full lg:w-1/2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="space-y-6" style={{ marginTop: '-0.20rem' }}>

                    {/* Welcome badge */}
                    <motion.div variants={itemVariants} className={`flex ${isMobile ? 'justify-center' : ''}`}>
                      <div className={`inline-flex items-center ${isMobile ? 'gap-1.5 px-2 py-1' : 'gap-2 px-2 sm:px-3 py-2'} rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-2`}>
                        <div className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full bg-green-400 animate-pulse`}></div>
                        <span className={`text-gray-300 font-medium ${isMobile ? 'text-[10px]' : 'text-xs'}`} style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                          AVAILABLE TO WORK
                        </span>
                      </div>
                    </motion.div>

                    {/* Name Heading */}
                    {isMobile ? (
                      <motion.h1 variants={itemVariants} className="hero-text font-bold leading-tight text-center mb-2">
                        <span className="text-white block mb-1 mt-0" style={{ fontSize: '1.25rem' }}>Hello I&apos;m,</span>
                        <span
                          className="hero-name"
                          style={{
                            fontFamily: 'var(--font-space-grotesk), sans-serif',
                            backgroundImage: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '1.5rem',
                            display: 'block',
                            marginTop: '0',
                            lineHeight: '1.2',
                            whiteSpace: 'normal',
                            wordWrap: 'break-word',
                            maxWidth: '100%',
                          }}
                        >
                          ALAMGIR HOSSAIN DRUBO
                        </span>
                      </motion.h1>
                    ) : (
                      <motion.h1 variants={itemVariants} className="hero-text text-3xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        <span
                          className="text-white"
                          style={{
                            fontSize: '2rem',
                            display: 'block',
                            marginBottom: '0.5rem',
                            marginTop: '0'
                          }}
                        >
                          Hello I&apos;m,
                        </span>
                        <span
                          className="hero-name whitespace-nowrap"
                          style={{
                            fontFamily: 'var(--font-space-grotesk), sans-serif',
                            backgroundImage: 'linear-gradient(135deg, #ff6b35, #f7931e, #ff9500)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '45px',
                            display: 'block',
                            marginTop: '0',
                            lineHeight: '1'
                          }}
                        >
                          ALAMGIR HOSSAIN DRUBO
                        </span>
                      </motion.h1>
                    )}

                    {/* Role badge */}
                    <motion.div variants={itemVariants} className={`flex ${isMobile ? 'justify-center' : ''}`}>
                      <div className={`inline-flex items-center gap-2 sm:gap-3 ${isMobile ? 'px-2 py-1.5' : 'px-4 sm:px-8 py-3 sm:py-5'} rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 ${isMobile ? 'mb-6 sm:mb-8' : 'mb-2'} backdrop-blur-sm ${isMobile ? 'min-w-[240px] min-h-[40px]' : 'min-w-[320px] min-h-[64px]'}`} style={!isMobile ? { marginLeft: '-5px' } : {}}>
                        <i className={`fas fa-rocket text-blue-400 animate-bounce ${isMobile ? 'text-[10px]' : 'text-sm sm:text-base'}`}></i>
                        <span>
                          <FlipWords
                            className={isMobile ? "flipwords-font text-xs text-blue-400 font-medium" : "flipwords-font text-lg sm:text-xl text-blue-400 font-medium"}
                            words={words}
                          />
                        </span>
                      </div>
                    </motion.div>

                    {/* Mobile Image */}
                    {isMobile && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center mt-4 mb-4"
                      >
                        <img
                          src="/DP_removed_BG.png"
                          alt="Profile"
                          width={200}
                          height={200}
                          style={{
                            maxWidth: '80vw',
                            height: 'auto',
                            borderRadius: '1rem',
                            objectFit: 'cover',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Description */}
                    <motion.div variants={itemVariants} className={`mt-4 text-xl text-gray-300 max-w-xl ${isMobile ? 'text-center mx-auto' : 'ml-auto'}`} style={{ marginLeft: isMobile ? undefined : '5px', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                      Full-Stack Developer actively seeking opportunities to integrate Intelligent systems into Real-world solutions.
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-2 mt-4">
                      <motion.a
                        href="https://drive.google.com/file/d/1UiITMC1UhNa9bMl_sRLiXJxsgS8TDPqE/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-400 p-0.5 rounded-none transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#F87171]"
                      >
                        <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-none bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                          <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                            <img src="/pdf.png" alt="PDF" width={22} height={22} className="inline-block mr-2 align-middle" />
                            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>CV</span>
                            <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                          </span>
                        </span>
                      </motion.a>

                      <motion.a
                        href="https://calendly.com/utsho/30min"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-none bg-gradient-to-r from-green-800 to-green-700 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA] sm:ml-2 ml-0"
                      >
                        <span className="block w-full px-6 sm:px-2 py-3 sm:py-4 rounded-none bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700 relative">
                          <span className="flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white min-w-[120px]">
                            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>CONSULTATIONS</span>
                          </span>
                          <i className="fas fa-envelope transform transition-all duration-300 group-hover:rotate-12 absolute right-3 top-1/2 -translate-y-1/2"></i>
                        </span>
                      </motion.a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div variants={itemVariants} className={`flex gap-4 mt-6 items-center ${isMobile ? 'justify-center flex-wrap' : ''}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        aria-label="GitHub"
                        className="rounded-lg contact-social-icon  transition-colors"
                        onClick={() => window.open('https://github.com/alamgir65', '_blank')}
                      >
                        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" width={32} height={32} className="w-8 h-8" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        aria-label="LinkedIn"
                        className="rounded-lg contact-social-icon transition-colors"
                        onClick={() => window.open('https://www.linkedin.com/in/utsho-heaven-chowdhury/', '_blank')}
                      >
                        <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        aria-label="Email"
                        className=" rounded-lg contact-social-icon transition-colors"
                        onClick={() => window.location.href = 'mailto:utshozi11@gmail.com'}
                      >
                        <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" width={32} height={32} className="w-8 h-8" />
                      </motion.button>

                      <div className="inline-flex items-center gap-2 px-2 sm:px-2 py-1 sm:py-1.5 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                        <span className="text-gray-300 text-[10px] sm:text-xs font-medium" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                          alamgirhossain23525@istt.edu.bd
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Glowing Card */}
                {!isMobile && (
                  <div className="w-full lg:w-1/2 relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: "-50%", y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: "-50%",
                        y: [0, -15, 0],
                        boxShadow: [
                          "0 0 15px #7df9ff, 0 0 25px #00bfff, inset 0 0 0 1px #7df9ff",
                          "0 0 25px #7df9ff, 0 0 45px #00bfff, inset 0 0 0 1px #7df9ff",
                          "0 0 15px #7df9ff, 0 0 25px #00bfff, inset 0 0 0 1px #7df9ff"
                        ]
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="rounded-2xl p-1 absolute"
                      style={{
                        width: '320px',
                        height: '400px',
                        background: '#7df9ff',
                        top: '-150px',
                        left: '50%',
                      }}
                    >
                      <div
                        className="bg-gray-900 rounded-xl h-full flex items-start justify-center pt-1 pb-1 px-1"
                        style={{ backgroundColor: 'rgba(17, 24, 39, 0.95)' }}
                      >
                        <Image
                          src="/alamgir3.png"
                          alt="Profile"
                          width={320}
                          height={400}
                          className="w-full h-full object-cover rounded-lg"
                          style={{
                            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                            objectPosition: 'center bottom'
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* BOOKSHELF SECTION */}
          {/* <section id="bookshelf">
            <div className="container mx-auto px-6 lg:px-8 mt-20">
              <BookshelfSection />
            </div>
          </section> */}

          {/* ABOUT SECTION */}
          <section id="about">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              className="container mx-auto px-6 lg:px-8 mt-20"
            >
              <About />
              <div style={{ height: '2rem', width: '100%' }} />
            </motion.div>
          </section>

          {/* SKILLS SECTION */}
          <section id="skills">
            <SkillsPage />
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects">
            <Projects />
          </section>

          {/* COMPETITVE PROGRAMMING SECTION */}
          <section id='cp'>
            <CpSection/>
          </section>

          {/* EDUCATION SECTION */}
          <section id="education">
            <Education />
          </section>

          {/* CONTACTS SECTION */}
          <section id="contacts">
            <Contact />
          </section>

        </main>
      </div>
    </>
  );
}