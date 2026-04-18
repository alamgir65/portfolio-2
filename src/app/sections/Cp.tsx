"use client";

import { useState } from "react";
import {
    Award,
    Calendar,
    ExternalLink,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const CpSection: React.FC = () => {
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

    const cpData = [
        {
            rank: "SPECIALIST",
            platform: "CODEFORCES",
            solved: 1090,
            year: "2023 - PRESENT",
            logo: "/icons/cf2.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' },
            fullViewUrl: "https://codeforces.com/profile/alamgir65",
        },
        {
            rank: "Rating: 1642",
            platform: "CODECHEF",
            solved: 220,
            year: "2023 - PRESENT",
            logo: "/icons/cc2.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' },
            fullViewUrl: "https://www.codechef.com/users/alamgir65",
        },
        {
            rank: "RATING: 1514",
            platform: "LEETCODE",
            solved: 250,
            year: "2023 - PRESENT",
            logo: "/icons/leetcode2.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' },
            fullViewUrl: "https://leetcode.com/u/alamgirhossain/",
        },
        {
            rank: "ASIA DHAKA REGIONALIST (23,24,25)",
            platform: "ICPC",
            solved: null,
            year: "2023, 2024 & 2025",
            logo: "/icons/icpc-logo2.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' },
            fullViewUrl: "https://icpc.global/private/profile/983711",
        },
        {
            rank: "PROBLEM SOLVER",
            platform: "VJUDGE",
            solved: "400+",
            year: "2023 - PRESENT",
            logo: "/icons/vjudge2.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' },
            fullViewUrl: "https://vjudge.net/user/alamgir65",
        },
        {
            rank: "PROBLEM SOLVER",
            platform: "HACKERRANK",
            solved: "70+",
            year: "2023 - PRESENT",
            logo: "/icons/hr2.png",
            className: "h-21 w-21",
            style: { maxWidth: '85px', maxHeight: '85px' },
            fullViewUrl: "https://www.hackerrank.com/profile/alamgirhossain",
        },
    ]


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
                        COMPETITIVE PROGRAMMING
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                        Profile & Rank
                    </p>
                </div>


                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cpData.map((edu, index) => (
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
                                            alt={edu.platform + ' logo'}
                                            className={`${edu.className} object-contain`}
                                            style={edu.style}
                                        />
                                        <h3 className="text-xl font-bold" style={{ color: '#77ddbb', fontFamily: 'var(--font-ubuntu), sans-serif' }}>
                                            {edu.rank}
                                        </h3>
                                    </div>
                                    <p className="text-base flex items-center justify-center gap-2 font-semibold" style={{ color: '#C94B76', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        {edu.platform}
                                    </p>
                                    {
                                        edu.solved && <p className="text-base flex items-center justify-center gap-2 font-semibold" style={{ color: '#0ca81f', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                                        SOLVED COUNT: {edu.solved}
                                    </p> 
                                    }
                                    
                                    <p className="text-gray-400 flex items-center justify-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {edu.year}
                                    </p>
                                    <a
                                        href={edu.fullViewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 sm:mt-3 flex items-center justify-center gap-1 text-[10px] sm:text-xs font-semibold bg-transparent hover:bg-yellow-500/20 text-yellow-400/70 hover:text-blue-400 px-2 py-1 sm:px-3 sm:py-1.5 rounded-none transition-all w-fit mx-auto border border-cyan-400/40 hover:border-yellow-500"
                                        >
                                        <ExternalLink className="w-3 h-3" />
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div >
        </section >
    );
};

export default CpSection;