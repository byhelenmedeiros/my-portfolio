import React, { useState } from 'react';
import Modal from 'react-modal';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'This is the description for Project 1.',
        image: 'https://via.placeholder.com/600x400?text=Project+1',
        details: 'Detailed information about Project 1.'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'This is the description for Project 2.',
        image: 'https://via.placeholder.com/600x400?text=Project+2',
        details: 'Detailed information about Project 2.'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'This is the description for Project 3.',
        image: 'https://via.placeholder.com/600x400?text=Project+3',
        details: 'Detailed information about Project 3.'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'This is the description for Project 4.',
        image: 'https://via.placeholder.com/600x400?text=Project+4',
        details: 'Detailed information about Project 4.'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'This is the description for Project 5.',
        image: 'https://via.placeholder.com/600x400?text=Project+5',
        details: 'Detailed information about Project 5.'
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'This is the description for Project 6.',
        image: 'https://via.placeholder.com/600x400?text=Project+6',
        details: 'Detailed information about Project 6.'
    }
];

Modal.setAppElement('#root');

const Portfolio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <section id="portfolio" className="p-20 md:m-8">
            <h2 className="portfolio__text-small text-center md:text-left">Portfolio</h2>
    
            <h2 className='about__text-name text-white m-6 text-2xl font-bold hover:text-[#836285] transition-colors duration-300'>
                Check out my featured projects.
            </h2>
            <TransitionGroup className="portfolio__image-img grid grid-cols-1 md:grid-cols-4 gap-10">
                {projects.map((project) => (
                    <CSSTransition
                        key={project.id}
                        timeout={500}
                        classNames={{
                            enter: 'portfolio__image-img-enter',
                            enterActive: 'portfolio__image-img-enter-active',
                            exit: 'portfolio__image-img-exit',
                            exitActive: 'portfolio__image-img-exit-active',
                        }}
                    >
                        <div 
                            className="relative"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="cursor-pointer"
                                onClick={() => openModal(project)}
                            />
                            {hoveredProject === project.id && (
                                <div className="image-overlay">
                                    <div className="project-title">{project.title}</div>
                                    <button
                                        onClick={() => openModal(project)}
                                        className="glass-button"
                                    >
                                        View More
                                    </button>
                                </div>
                            )}
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="portfolio__modal p-8 rounded-lg max-w-xl mx-auto"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                {selectedProject && (
                    <div>
                        <h3 className="text-2xl font-bold mb-4 ">{selectedProject.title}</h3>
                        <p>{selectedProject.details}</p>
                        <button
                            onClick={closeModal}
                            className="glass-button mt-4"
                        >
                            Close
                        </button>
                    </div>
                )}
            </Modal>

            <div className="mt-4 text-sm text-gray-200">
                <p>
                    <strong>Disclaimer:</strong> Some projects are not displayed here due to
                    confidentiality agreements with clients. These projects involve sensitive 
                    information and cannot be showcased in this portfolio. Rest assured, they 
                    reflect the same level of dedication and expertise.
                </p>
            </div>
        </section>
    );
};

export default Portfolio;
