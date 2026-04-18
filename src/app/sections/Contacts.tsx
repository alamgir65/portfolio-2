"use client";

import * as React from "react";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("../components/Form"), { ssr: false });
import { MapPin, ArrowUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  link?: string;
  text: string;
}



// Social Contact
export default function Contact() {
  const contactItems: ContactItem[] = [
    {
      icon: <img src="https://skillicons.dev/icons?i=gmail" alt="Email" className="w-8 h-8" />,
      label: "Email",
      link: "mailto:alamgirhossain23525@istt.edu.bd",
      text: "alamgirhossain23525@istt.edu.bd",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-8 h-8" />,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/alamgirhossain23525/",
      text: "Connect",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-8 h-8" />,
      label: "Github",
      link: "https://github.com/alamgir65",
      text: "alamgir65",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
        </svg>
      ),
      label: "Facebook",
      link: "https://www.facebook.com/alamgir-hossain",
      text: "Add Friend",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=instagram" alt="Instagram" className="w-8 h-8" />,
      label: "Instagram",
      link: "https://instagram.com/alamgir_65",
      text: "Follow Me",
    },
    {
      icon: <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" className="w-8 h-8" />,
      label: "Twitter",
      link: "https://twitter.com/alamgir65",
      text: "Tweet",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      label: "Location",
      text: "Dhaka, Bangladesh",
    },
  ];

  const leftVariant: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariant: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };


  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-transparent">
      <div className="relative z-10">
        <div className="pt-20 lg:pt-[0rem] bg-transparent text-white pb-5 flex items-center overflow-x-clip">
          <section className="hero w-full flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-0 items-center">

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={leftVariant}
                  className="space-y-8 flex flex-col justify-center items-center h-full"
                >
                  <div className="space-y-5 lg:pr-0">
                    <h3 className="text-4xl font-bold mb-2 text-green-400 text-left pr-4 lg:pr-12" style={{ marginTop: '48px', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>Get in Touch</h3>
                    <div className="mb-7.5"></div>
                    <div className="space-y-4">
                      {contactItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="contact-social-icon-link"
                              style={{ display: 'inline-block' }}
                            >
                              <div className="bg-pink-500/10 p-2 rounded-lg contact-social-icon">
                                {item.icon}
                              </div>
                            </a>
                          ) : (
                            <div className="bg-pink-500/10 p-2 rounded-lg contact-social-icon">
                              {item.icon}
                            </div>
                          )}
                          <div>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-white duration-500"
                                style={{ color: '#E3984D', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                              >
                                {item.text}
                              </a>
                            ) : (
                              <p className="text-gray-400" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>{item.text}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div   // Contact Form 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={rightVariant}
                  className="flex justify-center items-center w-full lg:justify-center"
                >
                  <Form />
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <button
          onClick={scrollToTop} //Floating Scroll-Top Button
          className="absolute bottom-10 right-10 p-4 bg-transparent border border-white rounded-full text-white hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}