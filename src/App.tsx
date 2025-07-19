import { useState, useEffect } from 'react';
import InfluencerShowcase from './components/InfluencerShowcase';

function App() {
  const [activeTab, setActiveTab] = useState('for companies');
  const [showArrow, setShowArrow] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('');
  const tabs = ['for companies', 'for creators'];

  useEffect(() => {
    console.log('=== LOADING VAPI SCRIPT AFTER WIDGETS ===');
    console.log('Widgets rendered at:', Date.now());
    console.log('vapi-widget elements in DOM:', document.querySelectorAll('vapi-widget').length);
    
    // Load VAPI script AFTER widgets are in DOM
    const vapiScript = document.createElement('script');
    vapiScript.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    vapiScript.async = true;
    vapiScript.type = 'text/javascript';
    
    vapiScript.onload = function() {
      console.log('VAPI script loaded after widgets at:', Date.now());
      console.log('Widgets should now be functional!');
    };
    
    vapiScript.onerror = function() {
      console.error('VAPI script failed to load');
    };
    
    document.head.appendChild(vapiScript);
    console.log('VAPI script added to head after widgets');
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      // Only show arrow on desktop (xl screens and up)
      if (window.innerWidth >= 1280) {
        setArrowDirection(tab === 'for creators' ? 'to-tess' : 'to-tom');
        setShowArrow(true);
        
        // Hide arrow after animation completes
        setTimeout(() => {
          setShowArrow(false);
        }, 800);
      }
      setActiveTab(tab);
    }
  };


  return (
    <div className="min-h-screen" style={{backgroundColor: '#fff2f2'}}>
      {/* Navigation Tabs - Desktop only at top */}
      <div className="hidden xl:flex w-full px-8 py-3 items-center justify-center">
        <div className="bg-gray-900 rounded-3xl p-1 flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-8 py-4 md:py-5 rounded-[20px] text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Tabs - Mobile/Tablet, positioned below widgets */}
      <div className="xl:hidden w-full px-8 py-3 flex items-center justify-center" style={{ marginTop: '80px' }}>
        <div className="bg-gray-900 rounded-3xl p-1 flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-8 py-4 md:py-5 rounded-[20px] text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Arrow */}
      {showArrow && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div 
            className={`absolute transition-all duration-1000 ease-in-out ${
              arrowDirection === 'to-tess' 
                ? 'animate-arrow-to-tess' 
                : 'animate-arrow-to-tom'
            }`}
            style={{
              left: '50%',
              top: '80px',
              transform: 'translateX(-50%)',
            }}
          >
            <img 
              src="/twitter_bird.png"
              alt="Twitter Bird"
              width="60" 
              height="60" 
              className={`opacity-60 ${arrowDirection === 'to-tom' ? 'scale-x-[-1]' : ''}`}
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className={`${
          activeTab === 'for companies' 
            ? 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-300' 
            : 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300'
        } rounded-3xl transition-all duration-500 overflow-hidden`}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <div className="text-center space-y-6">
              {/* Name */}
              <h1 className="text-7xl md:text-8xl font-black text-gray-900">
                {activeTab === 'for companies' ? 'Tom' : 'Tess'}
              </h1>

              {/* AI Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 text-base font-semibold text-gray-800 shadow-sm">
                  <img src="/Twitter_Verified_Badge.png" alt="Verified" className="w-5 h-5" />
                  <span>
                    {activeTab === 'for companies' ? 'AI Super Connector' : 'AI Headhunter'}
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 max-w-3xl mx-auto leading-tight mt-16">
                {activeTab === 'for companies' 
                  ? 'I help you connect to the best upcoming creators'
                  : 'I help you find brand deals that fit your vibe'
                }
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                {activeTab === 'for companies'
                  ? 'I listen to your needs and connect you with the best upcoming creators. Together, we can increase your brand awareness and reach. I\'ll introduce you to the right creators that Tess is working with. 🚀'
                  : 'I\'ll find you deals and you can continue with what you\'re good at. No need for expensive agencies. I\'ll put you into contact with local businesses that Tom is working with. ✨'
                }
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-32">
                <a 
                  href={activeTab === 'for companies' ? 'https://tally.so/r/mDRJXX' : 'https://tally.so/r/w77VJ6'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-900 text-white px-12 py-5 rounded-[32px] font-medium text-base text-center hover:bg-gray-800 transition-all duration-200 min-w-[240px] shadow-[0_2px_0_0_rgba(0,0,0,0.1)]"
                >
                  Sign up to waitlist
                </a>

                <button 
                  onClick={() => handleTabChange(activeTab === 'for companies' ? 'for creators' : 'for companies')}
                  className="px-12 py-5 rounded-[32px] font-medium text-base text-gray-600 hover:text-gray-900 transition-colors text-center min-w-[240px] bg-white/50 hover:bg-white/80 backdrop-blur-sm"
                >
                  {activeTab === 'for companies' 
                    ? 'Not a company? Switch to creator mode →'
                    : 'Not a creator? Switch to company mode →'
                  }
                </button>
              </div>

              {/* Showcase Section - Temporarily Hidden
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
                <div className="xl:col-span-7 space-y-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {activeTab === 'for companies' 
                      ? 'See the creators I\'m working with'
                      : 'Check out available opportunities'
                    }
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {activeTab === 'for companies'
                      ? 'I\'m constantly discovering and vetting new creators. Here\'s a preview of the talent pool you\'ll have access to.'
                      : 'These are some of the brands currently looking for creators like you. New opportunities are added daily.'
                    }
                  </p>
                </div>

                <div className="xl:col-span-5 relative">
                  <div className="opacity-40 blur-sm">
                    <div className="max-w-md xl:max-w-none">
                      <InfluencerShowcase activeTab={activeTab} />
                    </div>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Vapi Widgets */}
      <div style={{ display: activeTab === 'for companies' ? 'block' : 'none' }}>
        <vapi-widget
          public-key="8ec48727-d887-45fe-a643-50845e54a542"
          assistant-id="60c98986-4681-463a-8420-d46ffd3895f2"
          mode="voice"
          theme="dark"
          base-bg-color="#000000"
          accent-color="#10B981"
          border-color="#000000"
          cta-button-color="#000000"
          cta-button-text-color="#ffffff"
          border-radius="large"
          size="full"
          position="top-left"
          title="TALK WITH TOM"
          start-button-text="Start"
          end-button-text="End Call"
          chat-first-message="Hey, How can I help you today?"
          chat-placeholder="Type your message..."
          voice-show-transcript="true"
          consent-required="false"
        ></vapi-widget>
      </div>

      <div style={{ display: activeTab === 'for creators' ? 'block' : 'none' }}>
        <vapi-widget
          public-key="8ec48727-d887-45fe-a643-50845e54a542"
          assistant-id="a950c370-11c9-42d9-88c4-db2585a01879"
          mode="voice"
          theme="light"
          base-bg-color="#ffffff"
          accent-color="#A855F7"
          border-color="#000000"
          cta-button-color="#ffffff"
          cta-button-text-color="#000000"
          border-radius="large"
          size="full"
          position="top-right"
          title="TALK WITH TESS"
          start-button-text="Start"
          end-button-text="End Call"
          chat-first-message="Hey, How can I help you today?"
          chat-placeholder="Type your message..."
          voice-show-transcript="true"
          consent-required="false"
        ></vapi-widget>
      </div>
    </div>
  );
}

export default App;