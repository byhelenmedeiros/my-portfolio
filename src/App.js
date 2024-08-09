import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import './styles/reset.css';
import './styles/main.css';
import './styles/tailwind.css'; 
import './styles/global.css'; 

const App = () => {
    return (
        
        <div className="App flex flex-col md:flex-row">
                 

            <Sidebar />
            <div className="content md:ml-64 p-8 flex-1 text-primary">
            <AnimatedBackground />
                <Header />
                <Home />
                <Portfolio />
                <About />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;