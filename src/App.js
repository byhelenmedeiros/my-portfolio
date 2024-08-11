import React from 'react';
import Sidebar from './components/Sidebar';
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Animation */}
      <AnimatedBackground className="absolute inset-0 z-0" />

      <div className="flex flex-col lg:flex-row h-full">
        {/* Sidebar */}
        <aside className="w-full lg:w-96 h-auto text-white p-6 z-10 mx-auto">
          <Sidebar />
        </aside>
        {/* Main content */}
        <div className="flex-1 mt-16 lg:mt-0 text-primary overflow-y-auto p-8">
          <Home />
            <About />
          <Portfolio />
        
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
