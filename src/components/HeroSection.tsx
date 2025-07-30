interface HeroSectionProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const HeroSection = ({ activeTab, handleTabChange }: HeroSectionProps) => {
  return (
    <div className="container mx-auto px-6 mt-6">
      <div className="bg-white rounded-3xl transition-all duration-500 overflow-hidden shadow-sm border border-black/[0.03] relative aspect-[17/9] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/background.png" 
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full">
          <div className="absolute inset-0 px-12 md:px-16">
            <div className="max-w-6xl mx-auto h-full relative">
              {/* Top Content */}
              <div className="absolute top-28 left-0 space-y-4 max-w-xl">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full pl-2 pr-4 py-1.5 text-sm font-medium text-white/90 border border-white/20">
                  <div className={`${
                    activeTab === 'for companies' 
                      ? 'bg-white/20' 
                      : 'bg-white/20'
                  } rounded-full w-6 h-6 flex items-center justify-center backdrop-blur-sm`}>
                    <span className="text-white text-xs">→</span>
                  </div>
                  Connecting talent with opportunity
                </div>

                {/* Brand Name */}
                <div className="space-y-2">
                  <h1 className="text-8xl md:text-8xl font-black text-gray-900 tracking-tight">
                    unbound
                  </h1>
                  <p className="text-gray-900 text-xl md:text-xl leading-relaxed">
                    The unbound network for freelancers & companies
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-20 left-0 right-0 flex flex-col sm:flex-row gap-4 justify-start">
                <a 
                  href="#"
                  className={`group relative px-8 py-3.5 rounded-full font-medium inline-flex items-center gap-2 text-lg
                    ${activeTab === 'for freelancers' 
                      ? 'bg-indigo-500' 
                      : 'bg-teal-600'
                    } text-white transition-all duration-300`}
                >
                  Get Started
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <button 
                  onClick={() => handleTabChange(activeTab === 'for companies' ? 'for freelancers' : 'for companies')}
                  className="px-8 py-3.5 rounded-full font-medium text-base text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 