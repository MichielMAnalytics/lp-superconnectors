import BrandBadge from './BrandBadge';
interface ExplanationSectionProps {
  activeTab: string;
}

const ExplanationSection = ({ activeTab }: ExplanationSectionProps) => {
  const isCompanies = activeTab === 'for companies';
  
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl transition-all duration-500 overflow-hidden shadow-sm border border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-12 md:px-16 py-24">
          {/* Section Title */}
          <div className="space-y-4 mb-24">
            <BrandBadge label="How it works" />
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              {isCompanies
                ? "Connect with the perfect freelancers"
                : "Find the right opportunities"
              }
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-16">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="text-3xl font-mono text-black/30">01</div>
                  <h3 className="text-2xl font-bold text-gray-900">Message me on WhatsApp</h3>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {isCompanies
                    ? "Reach out with your goals and what type of talent you're looking for"
                    : "Tell me about your work and what kind of brands you want to work with"
                  }
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-black/[0.03] rounded-2xl p-8 border border-black/[0.03]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/10" />
                    <div className={`${
                      isCompanies ? 'bg-teal-500/10 text-teal-600' : 'bg-indigo-500/10 text-indigo-600'
                    } rounded-2xl rounded-tl-none p-6 font-medium`}>
                      <p>
                        {isCompanies
                          ? "Hey I'm Tom, let's chat about who you'd like to meet."
                          : "Hey I'm Tess, let's chat about what brands you'd like to work with."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-16">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="text-3xl font-mono text-black/30">02</div>
                  <h3 className="text-2xl font-bold text-gray-900">Quick Call</h3>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {isCompanies
                    ? "No pointless meetings. Just a focused call to understand your goals and values."
                    : "No bureaucracy. Just a real conversation about your direction and opportunities."
                  }
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-black/[0.03] rounded-2xl p-8 border border-black/[0.03]">
                  <div className="text-center space-y-8">
                    <div className="w-20 h-20 rounded-full bg-black/10 mx-auto" />
                    <p className="text-xl font-medium text-gray-500">
                      {isCompanies ? 'Tom is calling...' : 'Tess is calling...'}
                    </p>
                    <div className="flex justify-center gap-8">
                      <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
                        <span className="transform rotate-45 text-xl">+</span>
                      </div>
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl
                        ${isCompanies 
                          ? 'bg-teal-500/10 text-teal-500' 
                          : 'bg-indigo-500/10 text-indigo-500'
                        }`}>
                        <span>✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-16">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="text-3xl font-mono text-black/30">03</div>
                  <h3 className="text-2xl font-bold text-gray-900">Get Connected</h3>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {isCompanies
                    ? "Direct introductions to talent who'll champion your brand. No middlemen. No markup."
                    : "Direct access to brands that respect your worth. No cuts. No compromises."
                  }
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-black/[0.03] rounded-2xl p-8 border border-black/[0.03]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg
                        ${isCompanies 
                          ? 'bg-teal-500/10 text-teal-500' 
                          : 'bg-indigo-500/10 text-indigo-500'
                        }`}>
                        ⚡
                      </div>
                      <p className="font-medium text-xl text-gray-500">Perfect Match</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-black/[0.03]">
                      <p className="text-gray-500 text-lg">
                        {isCompanies
                          ? "Found talent who embodies your brand's future vision."
                          : "Found a brand that's ready for your future vision."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationSection; 