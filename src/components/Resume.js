import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaElementor, FaJsSquare, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        period: '2014 - now',
        title: 'Founder & Creative Director',
        company: 'Joss Studio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
    },
    {
        id: 2,
        period: '2010 - 2014',
        title: 'Senior UI / UX Designer',
        company: 'Google Inc',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
    },
    {
        id: 3,
        period: '2008 - 2010',
        title: 'Graphic Designer',
        company: 'Joss Studio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
    }
];

const education = [
    {
        id: 1,
        period: '2004 - 2008',
        degree: 'Master in Design',
        institution: 'New York University',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
    },
    {
        id: 2,
        period: '2000 - 2004',
        degree: 'Bachelor of Arts',
        institution: 'University of London',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
    },
    {
        id: 3,
        period: '1998 - 2000',
        degree: 'Artist of College',
        institution: 'University of Sydney',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.'
    }
];

const skills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 size={24} color="#E34F26" /> },
    { id: 2, name: 'CSS', icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { id: 3, name: 'PHP', icon: <FaPhp size={24} color="#787CB5" /> },
    { id: 4, name: 'WordPress', icon: <FaWordpress size={24} color="#21759B" /> },
    { id: 5, name: 'Elementor', icon: <FaElementor size={24} color="#230F52" /> },
    { id: 6, name: 'JavaScript', icon: <FaJsSquare size={24} color="#F7DF1E" /> },
    { id: 7, name: 'React', icon: <FaReact size={24} color="#61DAFB" /> },
    { id: 8, name: 'Git', icon: <FaGit size={24} color="#F05032" /> },
    { id: 9, name: 'GitHub', icon: <FaGithub size={24} color="#181717" /> }
];

const Resume = () => {
    const [showExperiences, setShowExperiences] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const expElement = document.getElementById('experiences');
            const eduElement = document.getElementById('education');

            if (expElement && eduElement) {
                const expPosition = expElement.getBoundingClientRect().top;
                const eduPosition = eduElement.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (expPosition < windowHeight * 0.75) {
                    setShowExperiences(true);
                }
                if (eduPosition < windowHeight * 0.75) {
                    setShowEducation(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="resume" className="p-8 md:p-20">
            <h2 className="about__text-small text-center md:text-left">
                Resume
            </h2>
            <p className="about__text-name text-white m-6 text-2xl font-bold hover:text-[#836285] transition-colors duration-300">
                Combining design expertise with programming skills for a seamless digital experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Experiences Column */}
                <div id="experiences" className={`space-y-12 ${showExperiences ? 'fade-in' : 'hidden'}`}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <svg className="icon w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 8h1a3 3 0 0 1 0 6h-1" strokeWidth="2" />
                            <path d="M2 8h16v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeWidth="2" />
                            <line x1="6" y1="1" x2="6" y2="4" strokeWidth="2" />
                            <line x1="10" y1="1" x2="10" y2="4" strokeWidth="2" />
                            <line x1="14" y1="1" x2="14" y2="4" strokeWidth="2" />
                        </svg>
                        My Experiences
                    </h2>
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-4 w-px bg-gray-700"></div>
                        {experiences.map((item) => (
                            <div key={item.id} className="timeline-item relative mb-12 flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#836285] rounded-full"></div>
                                <svg className="icon w-8 h-8 text-[#836285] absolute left-1/2 transform -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" stroke="#836285" strokeWidth="2" />
                                    <path d="M12 6v6l4 2" stroke="#836285" strokeWidth="2" />
                                </svg>
                                <div className="ml-12 bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    <h4 className="text-lg text-gray-300">{item.company}</h4>
                                    <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div id="education" className={`space-y-12 ${showEducation ? 'fade-in' : 'hidden'}`}>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <svg className="icon w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M16 3h-4l-2 4h8l-2-4z" strokeWidth="2" />
                            <rect x="3" y="7" width="18" height="14" rx="2" ry="2" strokeWidth="2" />
                        </svg>
                        My Education
                    </h2>
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 left-4 w-px bg-gray-700"></div>
                        {education.map((item) => (
                            <div key={item.id} className="timeline-item relative mb-12 flex items-center">
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#836285] rounded-full"></div>
                                <svg className="icon w-8 h-8 text-[#836285] absolute left-1/2 transform -translate-x-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="3" y="7" width="18" height="14" rx="2" ry="2" stroke="#836285" strokeWidth="2" />
                                    <path d="M16 3h-4l-2 4h8l-2-4z" stroke="#836285" strokeWidth="2" />
                                </svg>
                                <div className="ml-12 bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                                    <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                                    <h4 className="text-lg text-gray-300">{item.institution}</h4>
                                    <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <FaBriefcase size={24} className="mr-2" />
                    My Skills
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className="group relative flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            onMouseEnter={() => setSelectedSkill(skill.id)}
                            onMouseLeave={() => setSelectedSkill(null)}
                        >
                            {skill.icon}
                            <p className="mt-2 text-sm font-semibold text-white">{skill.name}</p>

                            {/* Tooltip */}
                            {selectedSkill === skill.id && (
                                <motion.div
                                    className="absolute bottom-full mb-2 w-48 p-2 bg-black text-white text-xs rounded-md shadow-lg text-center"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    {skill.description || `Proficient in ${skill.name}`}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resume;
