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
      <div className="hidden xl:flex w-full px-8 py-6 items-center justify-center">
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
      <div className="xl:hidden w-full px-8 py-6 flex items-center justify-center" style={{ marginTop: '80px' }}>
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
      <div className="container mx-auto px-6 py-2 flex flex-col min-h-[calc(100vh-120px)]">

        {/* Main Content Area */}
        <div className={`${
          activeTab === 'for companies' 
            ? 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-300' 
            : 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300'
        } rounded-3xl flex-1 mx-2 md:mx-6 lg:mx-8 my-2 transition-all duration-500 relative overflow-hidden max-h-[80vh] xl:max-h-none`}>
          
          <div className="flex flex-col min-h-full p-4 md:p-8 lg:p-16">
            {/* Header Section with Name and Badge */}
            <div className="text-center mb-8 lg:mb-12 relative">
              {/* Background Name */}
              <div className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 opacity-15 leading-none mb-4">
                {activeTab === 'for companies' ? 'Tom' : 'Tess'}
              </div>
              
              {/* AI Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 md:px-5 md:py-3 text-sm md:text-base font-semibold text-gray-800 shadow-sm">
                  <img src="/Twitter_Verified_Badge.png" alt="Verified" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>
                    {activeTab === 'for companies' ? 'AI Super Connector' : 'AI Headhunter'}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col xl:grid xl:grid-cols-2 xl:gap-12">
              {/* Text Content */}
                              <div className="text-center xl:text-left space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight">
                  {activeTab === 'for companies' 
                    ? 'I help you connect to the best upcoming creators'
                    : 'I help you find brand deals that fit your vibe.'
                  }
                </h2>
                
                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto xl:mx-0">
                  {activeTab === 'for companies'
                    ? 'I listen to your needs and connect you with the best upcoming creators. Together, we can increase your brand awareness and reach. I\'ll introduce you to the right creators that Tess is working with.'
                    : 'I\'ll find you deals and you can continue with what you\'re good at. No need for expensive agencies. I\'ll put you into contact with local businesses that Tom is working with.'
                  }
                </p>

                <div className="pt-4 xl:pt-6">
                  <a 
                    href={activeTab === 'for companies' ? 'https://tally.so/r/mDRJXX' : 'https://tally.so/r/w77VJ6'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gray-900 text-white px-6 py-4 md:px-8 md:py-5 rounded-3xl font-semibold hover:bg-gray-800 transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center min-w-[200px] shadow-[0_4px_0_0_#374151] md:shadow-[0_6px_0_0_#374151] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-1 active:translate-y-2 active:shadow-[0_0px_0_0_#374151]"
                  >
                    <span>{activeTab === 'for companies' ? 'Join the waitlist of Tom' : 'Join the waitlist of Tess'}</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl">→</span>
                  </a>
                </div>

                {/* Spacer to push InfluencerShowcase down */}
                <div className="h-16"></div>
                
                {/* InfluencerShowcase - appears under button, cut off by card boundary */}
                <div className="opacity-40 blur-sm flex justify-center">
                  <InfluencerShowcase activeTab={activeTab} />
                </div>
              </div>

              {/* Right Content - Influencer Showcase - Desktop only */}
              <div className="hidden xl:flex justify-center xl:justify-end">
                <div className="opacity-40 blur-sm pointer-events-none select-none">
                  <InfluencerShowcase activeTab={activeTab} />
                </div>
              </div>
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