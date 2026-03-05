import { useEffect, useState } from 'react';

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = '"The AI That Trades the Memes."';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-16 pb-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo/Token Symbol */}
        <div className="mb-8 md:mb-12 animate-float">
          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00d4aa] via-[#00b894] to-[#ff8c42] p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-[#0a0a0b] flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-[#00d4aa] to-[#ff8c42] bg-clip-text text-transparent">
                  $N
                </span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-[#00d4aa] opacity-20 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-6 tracking-tight ${glitchActive ? 'glitch' : ''}`}
          data-text="$NEURO"
        >
          <span className="bg-gradient-to-r from-[#00d4aa] via-[#00ffcc] to-[#ff8c42] bg-clip-text text-transparent">
            $NEURO
          </span>
        </h1>

        {/* Tagline with typing effect */}
        <p className="text-lg md:text-xl lg:text-2xl font-mono text-[#00d4aa] mb-8 h-8">
          {typedText}
          <span className="animate-blink">|</span>
        </p>

        {/* Concept Card */}
        <div className="relative mt-8 md:mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa]/20 to-[#ff8c42]/20 rounded-2xl blur-xl" />
          <div className="relative bg-[#111113]/90 backdrop-blur-md border border-[#1a1a1f] rounded-2xl p-6 md:p-8 text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl animate-bounce-slow">🔥</span>
              <h2 className="text-xl md:text-2xl font-orbitron font-bold text-white">Concept</h2>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-mono">
              $NEURO is an AI-powered memecoin that <span className="text-[#00d4aa] font-semibold">"learns"</span> from social trends, X engagement, Base ecosystem chatter, and meme virality — then automatically generates:
            </p>

            <ul className="space-y-3 md:space-y-4">
              {[
                { icon: '🎨', text: 'Meme content' },
                { icon: '📈', text: 'Trend predictions' },
                { icon: '🎮', text: 'Community quests' },
                { icon: '📊', text: 'Trading sentiment signals' },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-3 md:p-4 rounded-xl bg-[#0a0a0b]/60 border border-[#1a1a1f] hover:border-[#00d4aa]/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                  <span className="text-gray-200 font-mono text-sm md:text-base">{item.text}</span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-[#00d4aa] opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#00d4aa] to-[#00b894] text-[#0a0a0b] font-orbitron font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,212,170,0.4)] transition-all duration-300 hover:scale-105 text-sm md:text-base">
            Join the Neural Network
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-[#ff8c42] text-[#ff8c42] font-orbitron font-bold rounded-xl hover:bg-[#ff8c42]/10 hover:shadow-[0_0_40px_rgba(255,140,66,0.3)] transition-all duration-300 hover:scale-105 text-sm md:text-base">
            Read Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
}
