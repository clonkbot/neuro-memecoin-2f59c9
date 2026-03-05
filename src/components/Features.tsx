import { useState } from 'react';

const features = [
  {
    id: 'meme-engine',
    title: 'AI Meme Engine',
    description: 'Neural networks analyze viral patterns to generate on-trend meme content that resonates with the community.',
    icon: '🧠',
    color: '#00d4aa',
    stats: { label: 'Memes Generated', value: '12.4K' },
  },
  {
    id: 'trend-oracle',
    title: 'Trend Oracle',
    description: 'Real-time analysis of X engagement, Base ecosystem activity, and social sentiment to predict the next big moves.',
    icon: '🔮',
    color: '#9b59b6',
    stats: { label: 'Accuracy Rate', value: '84%' },
  },
  {
    id: 'quest-system',
    title: 'Quest System',
    description: 'Dynamic community challenges that reward participation and drive engagement across the ecosystem.',
    icon: '⚔️',
    color: '#ff8c42',
    stats: { label: 'Active Quests', value: '47' },
  },
  {
    id: 'signal-feed',
    title: 'Signal Feed',
    description: 'Live trading sentiment signals powered by machine learning models trained on market behavior patterns.',
    icon: '📡',
    color: '#3498db',
    stats: { label: 'Signals/Day', value: '156' },
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">Neural </span>
            <span className="bg-gradient-to-r from-[#00d4aa] to-[#ff8c42] bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto">
            Powered by advanced AI systems learning from the pulse of crypto culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeFeature === feature.id
                  ? 'border-[#00d4aa] bg-[#0f0f11]'
                  : 'border-[#1a1a1f] bg-[#111113]/80 hover:border-[#2a2a2f]'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                style={{ backgroundColor: feature.color }}
              />

              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-orbitron font-bold text-white group-hover:text-[#00d4aa] transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-mono">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1f]">
                  <span className="text-xs md:text-sm text-gray-500 font-mono">{feature.stats.label}</span>
                  <span
                    className="text-lg md:text-xl font-orbitron font-bold"
                    style={{ color: feature.color }}
                  >
                    {feature.stats.value}
                  </span>
                </div>

                {/* Animated corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${feature.color}20 50%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
