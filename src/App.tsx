import { useState, useEffect } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Hero from './components/Hero';
import Features from './components/Features';
import SentimentDashboard from './components/SentimentDashboard';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <NeuralBackground />
      <div className="relative z-10">
        <Hero />
        <Features />
        <SentimentDashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
