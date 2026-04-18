"use client";

import Image from "next/image";
const HeroImg = "/alamgir5.jpg";
import React from "react";
import { motion, Variants } from "framer-motion";



export default function About(): React.ReactElement {

  // Image Animation
  const imageRevealVariant: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)" // starts blurry
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)", // becomes clear
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Text Container
  const textContainerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  // Text Item
  const textItemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Border Animation
  const borderVariant: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "100%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 }
    }
  };

  return (
    <>
      <section id="about" className="text-white overflow-x-clip" style={{ background: 'transparent', marginBottom: '2rem' }}>
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">

          {/* Animated Header */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-xl text-4xl font-semibold lg:text-5xl"
            style={{ color: '#DEB34B', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Developer, Competitive Programmer
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

            {/* Image Side */}
            <div className="relative mb-6 sm:mb-0">
              <motion.div
                className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={imageRevealVariant}
              >
                <Image
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                  priority
                />
              </motion.div>
            </div>

            {/* Text Side */}
            <motion.div
              className="relative space-y-4"
              variants={textContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >




              <div className="pt-6">
                <blockquote className="relative pl-4">
                  {/* Animated Border Line */}
                  <motion.span
                    variants={borderVariant}
                    className="absolute left-0 top-0 w-1 bg-gray-300"
                  />

                  <motion.p variants={textItemVariant} className="text-white ubuntu-font text-sm md:text-lg text-justify">
                    {`Hi, I’m Alamgir Hossain — an ambitious and highly motivated undergraduate student pursuing a BSc (Hons.) in Computer Science and Engineering. I specialize in software development with a strong passion for problem-solving and competitive programming. I thrive on challenges that push the limits of my logical and algorithmic thinking. I’m a quick learner with a self-driven mindset. Exploring new technologies is something I genuinely enjoy, and I’m always looking to sharpen my skills across the full stack of web application development. From frontend to backend, I love building open and accessible solutions for the web — and I’m deeply passionate about contributing to a more connected digital world.`}
                  </motion.p>

                  <div className="mt-6 space-y-3">
                  </div>
                </blockquote>
                <br></br>

                <motion.p variants={textItemVariant} className="text-white mb-2 text-sm md:text-base" style={{ fontFamily: 'var(--font-ubuntu), sans-serif' }}>{`Let's not forget-`}</motion.p>

                {/* Pop-in animation Code Text */}
                <motion.p
                  variants={textItemVariant}
                  className="text-base md:text-xl"
                  style={{ color: '#CF4E5B', fontFamily: 'var(--font-ubuntu), sans-serif', fontStyle: 'italic' }}
                >
                  {`it all started with a   `}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{ color: '#5DCF4E', display: 'inline-block', fontFamily: 'var(--font-ubuntu), sans-serif', fontStyle: 'italic' }}
                  >
                    {'<'} hello world {'>'}
                  </motion.span>
                </motion.p>
                <motion.div variants={textItemVariant} className="mt-8">
                  <a 
                    href="https://www.supportkori.com/utsho" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2 py-2 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg cursor-pointer"
                    style={{ 
                      backgroundColor: '#04b82a', 
                      color: '#000000',
                      border: '1px solid #11111111',
                      fontFamily: '"ubuntu", sans-serif'
                    }}
                  >
                    <Image 
                      src="/icons/buymecoffee.svg" 
                      alt="Buy me a coffee" 
                      width={28} 
                      height={28} 
                    />
                    <span className="text-lg">Buy me Koffee ?</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}