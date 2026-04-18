"use client";

import { useState } from "react";
import {
    Award,
    Calendar,
    ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const EducationSection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const educationData = [
        {
            degree: "Higher Secondary Certificate (HSC)",
            school: "SAIKAT GOVERNMENT COLLEGE,NOAKHALI",
            year: "2020 - 2022",
            logo: "/sgc.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' }
        },
        {
            degree: "Bachelor's in Computer Science & Engineering (CSE)",
            school: "INSTITUTE OF SCIENCE, TRADE & TECHNOLOGY",
            year: "2023 - PRESENT",
            logo: "/istt.png",
            className: "h-24 w-24",
            style: { maxWidth: '96px', maxHeight: '96px' }
        },
    ];

    const certificationData = [
        {
            title: "International Collegiate Programming Contest-2025",
            issuer: "ICPC-GLOBAL",
            issuerLogo: "/icons/icpc-logo.png",
            date: "December 2025",
            skills: ["Team Work", "DSA", "CP"],
            certImage: "/certifications/icpc25.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1jE7nlQBN-MuygZ6BA3kN4Dk_EwRf1b4-/view?usp=sharing",
        },
        {
            title: "National Skills Certificate",
            issuer: "Chief Adviser's Office (NSDA)",
            issuerLogo: "/icons/nsda.png",
            date: "August 2025",
            skills: ["HTML", "CSS", "JS", "React"],
            certImage: "/certifications/nsda.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1MDEN6wHItIefvxiWqdj-Nuk2hc8_Rgkp/view?usp=sharing",
        },
        {
            title: "International Collegiate Programming Contest-2024",
            issuer: "ICPC-GLOBAL",
            issuerLogo: "/icons/icpc-logo.png",
            date: "December 2024",
            skills: ["Team Work", "DSA", "CP"],
            certImage: "/certifications/icpc24.png",
            fullViewUrl: "https://drive.google.com/file/d/1a-lxAfzPfmmkXmU3necOjTgpc3lnrziC/view?usp=sharing",
        },
        {
            title: "Software Product Management",
            issuer: "UNIVERSITY OF ALBERTA",
            issuerLogo: "/icons/alberta.svg",
            date: "March 2026",
            skills: ["Agile", "Client ", "Product Lifecycle"],
            certImage: "/certifications/2.png",
            fullViewUrl: "https://drive.google.com/file/d/1wRRbrow160c8ZBntPQWMCLAgaFGKOt09/view?usp=sharing",
        },
        {
            title: "International Collegiate Programming Contest-2023",
            issuer: "ICPC-GLOBAL",
            issuerLogo: "/icons/icpc-logo.png",
            date: "December 2024",
            skills: ["Team Work", "DSA", "CP"],
            certImage: "/certifications/icpc23.png",
            fullViewUrl: "https://drive.google.com/file/d/1fZ3kJOx4rKGdLLDvRnqa0rnJ4o0y88ro/view?usp=sharing",
        },
        {
            title: "Docker Foundations Professional",
            issuer: "DOCKER",
            issuerLogo: "/icons/cloud/docker.svg",
            date: "November 2025",
            skills: ["Containerization", "Docker Compose", "Docker Image"],
            certImage: "/certifications/10.png",
            fullViewUrl: "https://drive.google.com/file/d/1yBXVNV6GtR0qoVYNESu5xLgHa0AIhbDu/view?usp=sharing",
        },
        {
            title: "Introduction Software Engineering",
            issuer: "IBM",
            issuerLogo: "/icons/ibm.svg",
            date: "October 2025",
            skills: ["SDLC", "JQuery", "Design Patterns"],
            certImage: "/certifications/8.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1T05lfqIkMfn1nzfz_4oV5uvoS76LBm9q/view?usp=sharing",
        },
        {
            title: "Foundations Coding Full-Stack",
            issuer: "MICROSOFT",
            issuerLogo: "/icons/microsoft.svg",
            date: "October 2025",
            skills: ["CI / CD", "Graph Theory", "OOP"],
            certImage: "/certifications/7.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1Q3x_w_Iwlb0cohXrWVn4tm64VYKczhcn/view?usp=sharing",
        },
        {
            title: "AI Engineer For Developers Associate",
            issuer: "DATACAMP",
            issuerLogo: "/icons/datacamp.svg",
            date: "August 2025",
            skills: ["LLMs", "MLOPs", "LangChain"],
            certImage: "/certifications/1.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1VjhvU30KzGRGuVRpZOBk7v78eyTww7mP/view?usp=sharing",
        },
        {
            title: "Career Essentials in GitHub Professional",
            issuer: "GITHUB",
            issuerLogo: "/icons/cloud/github.svg",
            date: "December 2025",
            skills: ["Git Version Control", "Github Actions", "Collaboration"],
            certImage: "/certifications/14.png",
            fullViewUrl: "https://drive.google.com/file/d/1_v0_WsCgyhb-IArcvEaeMgbHAF_VrIjD/view?usp=sharing",
        },
        {
            title: "Machine Learning with Python",
            issuer: "ANACONDA",
            issuerLogo: "/icons/anaconda.svg",
            date: "December 2025",
            skills: ["Data Prep", "Regression", "Pandas"],
            certImage: "/certifications/13.png",
            fullViewUrl: "https://drive.google.com/file/d/15EH6757BzDBdAjuKT_5_RCaLBjcFG9-U/view?usp=sharing",
        },
        {
            title: "Neural Networks & Deep Learning",
            issuer: "DEEPLEARNING",
            issuerLogo: "/icons/deeplearning.svg",
            date: "October 2025",
            skills: ["Vectorization", "Shallow NN", "Deep NN"],
            certImage: "/certifications/9.jpg",
            fullViewUrl: "https://drive.google.com/file/d/1Rg5o2O7opV2ZF9K1-gyLWC9ZVAZE02Pl/view?usp=sharing",
        },
    ];



    // Container Animation:
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const cardVariants: Variants = {   //certs slide-in effect
        hidden: (index: number) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            y: 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            },
        },
    };

    const educationCardVariants: Variants = {    // 3D "flip up" effect for Edu Cards
        hidden: {
            opacity: 0,
            scale: 0.5,
            rotateX: -90
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 1600,
                damping: 18,
                mass: 0.18
            }
        }
    };

    return (
        <section className="min-h-screen relative overflow-hidden overflow-x-clip py-20 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 relative z-10 capitalize">
                <div className="text-center mb-12 pt-32">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                        EDUCATIONAL JOURNEY
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                        Academic background & achievements
                    </p>
                </div>


                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                            variants={educationCardVariants}
                            className={`relative border rounded-xl p-6 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm cursor-none ${hoveredIndex === index
                                ? "border-teal-500 scale-[1.02]"
                                : "border-blue-400/20"
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="space-y-4">
                                <div className="space-y-2 text-center">
                                    <div className="flex flex-col items-center gap-2">
                                        <img
                                            src={edu.logo}
                                            alt={edu.school + ' logo'}
                                            className={`${edu.className} object-contain`}
                                            style={edu.style}
                                        />
                                        <h3 className="text-xl font-bold" style={{ color: '#C94B76', fontFamily: 'var(--font-ubuntu), sans-serif' }}>
                                            {edu.degree}
                                        </h3>
                                    </div>
                                    <p className="text-base flex items-center justify-center gap-2 font-semibold" style={{ color: '#0CA81F', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        {edu.school}
                                    </p>
                                    <p className="text-gray-400 flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {edu.year}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* Thesis Card */}

                {/* <div className="flex justify-center mt-8">   
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={educationCardVariants}
                        className={`relative border rounded-xl p-5 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm w-full max-w-sm cursor-none ${hoveredIndex === 99 ? "border-teal-500 scale-[1.02]" : "border-blue-400/20"}`}
                        onMouseEnter={() => setHoveredIndex(99)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="space-y-4">
                            <div className="space-y-2 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src="/thesis.png"
                                        alt="Thesis logo"
                                        className="h-14 w-14 object-contain"
                                        style={{ maxWidth: '56px', maxHeight: '56px' }}
                                    />
                                    <h3 className="text-lg font-bold" style={{ color: '#c94b76', fontFamily: 'var(--font-ubuntu), sans-serif' }}>
                                        THESIS
                                    </h3>
                                </div>
                                <p className="text-base flex items-center justify-center gap-2 font-semibold" style={{ color: '#0ca81f', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                    BRAC UNIVERSITY
                                </p>
                                <p className="text-gray-400 flex items-center justify-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    2026
                                </p>
                            </div>
                            <p className="text-gray-300 text-[12.5px] text-center">
                                Multimodal Deep Learning for Medical Image Segmentation
                            </p>
                        </div>
                    </motion.div>
                </div> */}




                <motion.div        // Certifications Section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F5BE27', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                            PROFESSIONAL CERTIFICATIONS
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                            Self-development through Industry Recognized Certifications
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {certificationData.map((cert, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                className="group relative"
                                onMouseEnter={() => setHoveredIndex(100 + index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>

                                <div className={`relative h-full border rounded-xl overflow-hidden bg-gray-900 border-gray-800 p-2 sm:p-3 flex flex-col`}>

                                    <div className="w-full mb-1 sm:mb-2">
                                        <div className="relative w-full h-28 sm:h-40 bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                            <img
                                                src={cert.certImage}
                                                alt={cert.title}
                                                className="w-full h-full object-contain"
                                            />
                                            <div className="absolute top-2 right-2 bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs flex items-center gap-1">
                                                <Award className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1 sm:space-y-2 px-1 pb-1 sm:pb-2 text-center flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3
                                                className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1 group-hover:text-teal-400 transition-colors"
                                                style={{ color: '#c94b76', fontSize: '1rem', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                                            >
                                                {cert.title}
                                            </h3>

                                            <div className="flex items-center justify-center gap-2">
                                                {cert.issuerLogo && (
                                                    <img
                                                        src={cert.issuerLogo}
                                                        alt={`${cert.issuer} logo`}
                                                        className="w-5 h-5 object-contain"
                                                    />
                                                )}
                                                <p className="text-sm font-semibold" style={{ color: '#0ca81f', fontSize: '0.95rem', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                                                    {cert.issuer}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center text-gray-400 text-xs mt-1 sm:mt-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    {cert.date}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap justify-center gap-1 mt-1 sm:mt-2">
                                                {cert.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 py-0.5 text-[0.7rem] rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={cert.fullViewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 sm:mt-3 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-semibold bg-transparent hover:bg-yellow-500/20 text-yellow-400/70 hover:text-blue-400 px-2 py-1 sm:px-3 sm:py-1.5 rounded-none transition-all w-fit mx-auto border border-cyan-400/40 hover:border-yellow-500"
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div >
            </div >
        </section >
    );
};

export default EducationSection;