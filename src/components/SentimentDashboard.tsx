import { useState, useEffect } from 'react';

const mockSentiments = [
  { token: '$NEURO', sentiment: 92, change: '+12%', status: 'bullish' },
  { token: '$BRETT', sentiment: 78, change: '+5%', status: 'bullish' },
  { token: '$DEGEN', sentiment: 65, change: '-3%', status: 'neutral' },
  { token: '$TOSHI', sentiment: 71, change: '+8%', status: 'bullish' },
];

const recentSignals = [
  { time: '2m ago', type: 'BUY', message: 'High engagement detected on $NEURO meme thread' },
  { time: '15m ago', type: 'ALERT', message: 'Whale activity: 500K $NEURO accumulated' },
  { time: '32m ago', type: 'TREND', message: 'Neural network predicts 24h momentum shift' },
  { time: '1h ago', type: 'QUEST', message: 'Community quest completed: +2.4M impressions' },
];

export default function SentimentDashboard() {
  const [activeTab, setActiveTab] = useState<'sentiment' | 'signals'>('sentiment');
  const [animatedSentiments, setAnimatedSentiments] = useState(mockSentiments.map(s => ({ ...s, displayValue: 0 })));

  useEffect(() => {
    const animationDuration = 1500;
    const steps = 60;
    const stepDuration = animationDuration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedSentiments(mockSentiments.map(s => ({
        ...s,
        displayValue: Math.round(s.sentiment * easeOut),
      })));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">Live </span>
            <span className="bg-gradient-to-r from-[#ff8c42] to-[#00d4aa] bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-base">
            Real-time neural analysis of the Base memecoin ecosystem
          </p>
        </div>

        {/* Terminal-style dashboard */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00d4aa]/10 to-transparent rounded-3xl blur-3xl opacity-30" />

          <div className="relative bg-[#0c0c0e] border border-[#1a1a1f] rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#1a1a1f] bg-[#111113]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs md:text-sm text-gray-500">neuro_terminal v0.4.2</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
                <span className="font-mono text-xs text-[#00d4aa]">LIVE</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#1a1a1f]">
              <button
                onClick={() => setActiveTab('sentiment')}
                className={`flex-1 px-4 py-3 font-mono text-sm transition-all ${
                  activeTab === 'sentiment'
                    ? 'text-[#00d4aa] bg-[#00d4aa]/10 border-b-2 border-[#00d4aa]'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Sentiment Analysis
              </button>
              <button
                onClick={() => setActiveTab('signals')}
                className={`flex-1 px-4 py-3 font-mono text-sm transition-all ${
                  activeTab === 'signals'
                    ? 'text-[#ff8c42] bg-[#ff8c42]/10 border-b-2 border-[#ff8c42]'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                Signal Feed
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
              {activeTab === 'sentiment' ? (
                <div className="space-y-4">
                  {animatedSentiments.map((item, index) => (
                    <div
                      key={item.token}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 rounded-xl bg-[#111113] border border-[#1a1a1f] hover:border-[#2a2a2f] transition-all"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between sm:w-32">
                        <span className="font-orbitron font-bold text-white">{item.token}</span>
                        <span className={`text-sm font-mono sm:hidden ${item.change.startsWith('+') ? 'text-[#00d4aa]' : 'text-[#ff5f56]'}`}>
                          {item.change}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="relative h-3 bg-[#1a1a1f] rounded-full overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
                            style={{
                              width: `${item.displayValue}%`,
                              background: item.status === 'bullish'
                                ? 'linear-gradient(90deg, #00d4aa, #00ffcc)'
                                : 'linear-gradient(90deg, #ffbd2e, #ff8c42)',
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <span className="font-orbitron text-lg text-white">{item.displayValue}%</span>
                        <span className={`hidden sm:inline text-sm font-mono ${item.change.startsWith('+') ? 'text-[#00d4aa]' : 'text-[#ff5f56]'}`}>
                          {item.change}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-mono uppercase ${
                          item.status === 'bullish' ? 'bg-[#00d4aa]/20 text-[#00d4aa]' : 'bg-[#ffbd2e]/20 text-[#ffbd2e]'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {recentSignals.map((signal, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl bg-[#111113] border border-[#1a1a1f] hover:border-[#2a2a2f] transition-all"
                    >
                      <span className={`inline-flex w-fit px-3 py-1 rounded text-xs font-mono font-bold ${
                        signal.type === 'BUY' ? 'bg-[#00d4aa]/20 text-[#00d4aa]' :
                        signal.type === 'ALERT' ? 'bg-[#ff5f56]/20 text-[#ff5f56]' :
                        signal.type === 'TREND' ? 'bg-[#9b59b6]/20 text-[#9b59b6]' :
                        'bg-[#ff8c42]/20 text-[#ff8c42]'
                      }`}>
                        {signal.type}
                      </span>
                      <span className="flex-1 text-gray-300 font-mono text-sm">{signal.message}</span>
                      <span className="text-gray-600 font-mono text-xs">{signal.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
