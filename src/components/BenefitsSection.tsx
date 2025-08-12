interface BenefitsSectionProps {
  activeTab: string;
}

const BenefitsSection = ({ activeTab }: BenefitsSectionProps) => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className={`${
        activeTab === 'for companies' 
          ? 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-300' 
          : 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300'
      } rounded-3xl transition-all duration-500 overflow-hidden`}>
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {activeTab === 'for companies'
                  ? 'Why work with Tom?'
                  : 'Why work with Tess?'
                }
              </h2>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Benefit 1 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {activeTab === 'for companies' ? '🎯' : '✨'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activeTab === 'for companies'
                    ? 'Perfect Match Guarantee'
                    : 'Authentic Partnerships'
                  }
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeTab === 'for companies'
                    ? 'I analyze your brand values and target audience to find talent who truly resonate with your message.'
                    : 'I help you find brand partnerships that align with your work and audience interests.'
                  }
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {activeTab === 'for companies' ? '📈' : '💫'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activeTab === 'for companies'
                    ? 'Data-Driven Results'
                    : 'Growth Opportunities'
                  }
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeTab === 'for companies'
                    ? 'Track campaign performance with detailed analytics and engagement metrics in real-time.'
                    : 'Access exclusive brand deals and partnership opportunities that can help grow your audience.'
                  }
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {activeTab === 'for companies' ? '⚡' : '🤝'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activeTab === 'for companies'
                    ? 'Quick Turnaround'
                    : 'Long-term Success'
                  }
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeTab === 'for companies'
                    ? 'Launch your campaigns quickly with our streamlined process and vetted talent.'
                    : 'Build lasting relationships with brands that can lead to ongoing partnerships and steady income.'
                  }
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {activeTab === 'for companies' ? '🛡️' : '🚀'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {activeTab === 'for companies'
                    ? 'Risk-Free Collaboration'
                    : 'Simplified Process'
                  }
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeTab === 'for companies'
                    ? 'Work with pre-vetted talent who have proven track records and authentic engagement.'
                    : 'Focus on doing what you do best while I handle the introductions and admin.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 