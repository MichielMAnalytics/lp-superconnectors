import { Link } from 'react-router-dom';

interface HeroSectionProps {
  activeTab: string;
}

const HeroSection = ({ activeTab }: HeroSectionProps) => {
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
          {/* Subtle left-to-right overlay only on the left portion for readability */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-[45%] bg-gradient-to-r from-black/45 via-black/20 to-transparent backdrop-blur-[1px] pointer-events-none z-10" />
          <div className="absolute inset-0 px-12 md:px-16 z-20">
            <div className="max-w-6xl h-full relative">
              {/* Top Content */}
              <div className="absolute top-28 left-0 space-y-4 max-w-xl">
                {/* Brand Badge (on-dark variant) */}
                <div className="inline-flex items-center gap-2 rounded-full pl-2 pr-4 py-1.5 text-sm font-medium text-white/90 border border-white/20 bg-black/20 backdrop-blur-sm">
                  <div className="rounded-full w-6 h-6 flex items-center justify-center backdrop-blur-sm bg-white/20">
                    <span className="text-white text-xs">→</span>
                  </div>
                  Connecting talent with opportunity
                </div>

                {/* Brand Name */}
                <div className="space-y-2">
                  <h1 className="text-8xl md:text-8xl font-black text-gray-900 tracking-tight">
                    unbound
                  </h1>
                  <p className="text-gray-900 text-xl md:text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                  The last recruiter you'll ever need.
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-20 left-0 right-0 flex flex-col sm:flex-row gap-4 justify-start">
                <a 
                  href="#"
                  className={`group relative px-8 py-3.5 rounded-full font-medium inline-flex items-center gap-2 text-lg
                    ${activeTab === 'for talent' 
                      ? 'bg-indigo-500' 
                      : 'bg-teal-600'
                    } text-white transition-all duration-300`}
                >
                  Get Started
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <Link 
                  to={activeTab === 'for companies' ? '/talent' : '/companies'}
                  className="px-8 py-3.5 rounded-full font-medium text-base text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 