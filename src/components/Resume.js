import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaElementor, FaJsSquare, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        period: 'fevereiro de 2024 - Presente',
        title: 'Desenvolvedor web',
        company: 'Hovo Comunicativo',
        description: 'Atuando como Desenvolvedor Web, trabalhei em projetos de desenvolvimento de websites e plugins para WordPress, focando na implementação de novas funcionalidades, integração de tecnologias, otimização de performance e manutenção contínua.'
    },
    {
        id: 2,
        period: 'agosto de 2023 - janeiro de 2024',
        title: 'Desenvolvedor web',
        company: 'AudiçãoActiva, BelAudição, Unipessoal Lda.',
        description: 'Desenvolvi websites e plugins para WordPress, colaborando com equipes multifuncionais para a integração de novas tecnologias, otimização de performance e manutenção contínua das landing pages e websites da empresa.'
    },
    {
        id: 3,
        period: 'abril de 2023 - julho de 2023',
        title: 'Atendente de recepção',
        company: 'Instituto Politécnico de Viana do Castelo',
        description: 'Atuei como atendente de recepção, proporcionando suporte administrativo e atendimento ao cliente em um ambiente educacional.'
    },
    {
        id: 4,
        period: 'setembro de 2018 - abril de 2019',
        title: 'Designer da web',
        company: 'Rede Formar',
        description: 'Como Web Designer, fui responsável por criar layouts visuais para websites e desenvolver interfaces amigáveis, contribuindo para uma melhor experiência do usuário.'
    }
];

const education = [
    {
        id: 1,
        period: 'setembro de 2022 - junho de 2024',
        degree: 'CTeSP, Desenvolvimento web e multimédia',
        institution: 'Instituto Politécnico de Viana do Castelo',
        description: 'Curso Técnico Superior Profissional em Desenvolvimento Web e Multimédia, focado em adquirir competências técnicas e práticas em criação e manutenção de websites e conteúdo multimídia.'
    },
    {
        id: 2,
        period: 'agosto de 2022 - agosto de 2023',
        degree: 'Ensino Secundário Profissional, Programação de Computadores - Geral',
        institution: 'Tecnisign',
        description: 'Formação profissional em Programação de Computadores, abrangendo conhecimentos gerais em linguagens de programação e desenvolvimento de software.'
    },
    {
        id: 3,
        period: 'março de 2022 - julho de 2022',
        degree: 'Design UI/UX',
        institution: 'Cesae Digital - Centro para o Desenvolvimento de Competências Digitais',
        description: 'Curso focado em design de interfaces e experiência do usuário, cobrindo princípios de design visual e criação de interfaces intuitivas e eficazes.'
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
        <section id="resume" className="lg:p-20 p-0 md:m-8">
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
                        <FaBriefcase size={24} className="mr-2" />
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
                        <FaGraduationCap size={24} className="mr-2" />
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
