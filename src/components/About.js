import React from 'react';

const About = () => {
    return (
        <section id="about" className="m-0 md:m-8">
            <h2 className="about__text-small text-center md:text-left">About Me</h2>
            <div className="about__container flex flex-col md:flex-row md:gap-9 items-center">
                <div className="about__container-text flex-1 w-full md:mr-4">
                    <p className="about__text-text text-sm md:text-base">
                        Hello, my name is Helen. I'm from Minas Gerais, Brazil, and I've been living in Portugal for over five years. During these past years, I've focused on my education in Portugal, and I currently reside in Viana do Castelo.
                    </p>
                    <p className="about__text-text text-sm md:text-base">
                        In <span className="highlight">2017</span>, I started developing websites as a freelancer using Elementor. I had already been deeply interested in programming, and during this period, I also worked as a graphic designer, creating visual identities and digital media creatives. In <span className="highlight">2018</span>, I landed my first job as a web designer, which solidified my decision to pursue this career path.
                    </p>
                    <p className="about__text-text text-sm md:text-base">
                        In <span className="highlight">2019</span>, I emigrated and spent some time away from the field I love so much. However, in <span className="highlight">2022</span>, everything changed when I began a UI/UX design course. In the same year, I started a course in Web and Multimedia Development and simultaneously enrolled in a Level 4 E-learning Computer Programmer course. It was a two-year journey, with my last year focused solely on gaining experience—details of which you can find in my CV. Since then, I have dedicated nearly a year to web design and web development projects.
                    </p>
                </div>
                <div className="about__container flex-1 w-full flex flex-col gap-3 ">
                    <div className="about__container-one flex items-center text-gray-300">
                        <svg className="icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" stroke-width="2" />
                            <path d="M12 6v6l4 2" stroke-width="2" />
                        </svg>
                        <span>5+</span>
                        <p className="ml-2">Years of Experience</p>
                    </div>
                    <div className="about__container-two flex items-center text-gray-300">
                        <svg className="icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="7" width="18" height="14" rx="2" ry="2" stroke-width="2" />
                            <path d="M16 3h-4l-2 4h8l-2-4z" stroke-width="2" />
                        </svg>
                        <span>30+</span>
                        <p className="ml-2">Projects</p>
                    </div>
                    <div className="about__container-three flex items-center text-gray-300">
                        <svg className="icon mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 8h1a3 3 0 0 1 0 6h-1" stroke-width="2" />
                            <path d="M2 8h16v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke-width="2" />
                            <line x1="6" y1="1" x2="6" y2="4" stroke-width="2" />
                            <line x1="10" y1="1" x2="10" y2="4" stroke-width="2" />
                            <line x1="14" y1="1" x2="14" y2="4" stroke-width="2" />
                        </svg>
                        <span>50+</span>
                        <p className="ml-2">Cups of Coffee</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
