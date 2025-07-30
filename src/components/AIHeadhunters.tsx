interface AIHeadhuntersProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const AIHeadhunters = ({ activeTab, handleTabChange }: AIHeadhuntersProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="bg-white rounded-2xl sm:rounded-3xl transition-all duration-500 overflow-hidden shadow-sm border border-black/[0.03]">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-16 py-16 sm:py-24">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-sm rounded-full pl-2 pr-4 py-1.5 text-xs sm:text-sm font-medium text-gray-900 border border-black/10">
              <div className="bg-black/10 rounded-full w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center backdrop-blur-sm">
                <span className="text-gray-900 text-[10px] sm:text-xs">→</span>
              </div>
              {activeTab === 'for freelancers' ? 'AI Headhunter' : 'AI Super Connector'}
            </div>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight">
              {activeTab === 'for freelancers' ? 'Tess' : 'Tom'}
            </h2>

            {/* Main Headline */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 max-w-3xl mx-auto leading-tight mt-6 sm:mt-8">
              {activeTab === 'for freelancers'
                ? 'I help you find companies that fits, fast.'
                : 'I connect you to the best freelancers'
              }
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              {activeTab === 'for freelancers'
                ? 'I\'ll find you deals and you can continue with what you\'re good at. No need for expensive agencies. I\'ll put you into contact with local businesses that Tom is working with. ✨'
                : 'I listen to your needs and connect you with the best upcoming freelancers. Together, we can increase your brand awareness and reach. I\'ll introduce you to the right freelancers that Tess is working with. 🚀'
              }
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-16">
              <a 
                href={activeTab === 'for freelancers' ? 'https://tally.so/r/w77VJ6' : 'https://tally.so/r/mDRJXX'}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium inline-flex items-center justify-center gap-2 text-base sm:text-lg
                  ${activeTab === 'for freelancers' 
                    ? 'bg-indigo-500' 
                    : 'bg-teal-600'
                  } text-white transition-all duration-300 min-w-[200px] sm:min-w-[240px]`}
              >
                Sign up to waitlist
                <svg className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <button 
                onClick={() => handleTabChange(activeTab === 'for freelancers' ? 'for companies' : 'for freelancers')}
                className="relative overflow-hidden px-8 py-3.5 rounded-full font-medium text-base text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20"
              >
                <div className="absolute inset-0">
                  <img 
                    src="/backgroundbutton.png" 
                    alt="" 
                    className="w-full h-full object-cover scale-150 object-center"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm border border-white/20"></div>
                </div>
                <span className="relative z-10 text-white/90">
                  {activeTab === 'for freelancers' 
                    ? 'Not a freelancer? Switch to company mode →'
                    : 'Not a company? Switch to freelancer mode →'
                  }
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHeadhunters; 