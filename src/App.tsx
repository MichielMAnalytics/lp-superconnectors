import { useState, useEffect } from 'react';
import InfluencerShowcase from './components/InfluencerShowcase';



function App() {
  const [activeTab, setActiveTab] = useState('for companies');
  const [showArrow, setShowArrow] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('');
  const tabs = ['for companies', 'for creators'];

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setArrowDirection(tab === 'for creators' ? 'to-tess' : 'to-tom');
      setShowArrow(true);
      setActiveTab(tab);
      
      // Hide arrow after animation completes
      setTimeout(() => {
        setShowArrow(false);
      }, 800);
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fff2f2'}}>
      {/* Header */}
      <header className="w-full px-8 py-6 flex items-center justify-center">
        {/* Navigation Tabs */}
        <div className="bg-gray-900 rounded-3xl p-1 flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Animated Arrow */}
      {showArrow && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div 
            className={`absolute transition-all duration-2000 ease-out ${
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
            <svg 
              width="60" 
              height="60" 
              viewBox="0 0 60 60" 
              className="text-gray-900 opacity-80"
              fill="currentColor"
            >
              <path d="M30 5 L50 25 L35 25 L35 55 L25 55 L25 25 L10 25 Z" />
            </svg>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8 flex flex-col" style={{height: 'calc(100vh - 120px)'}}>

        {/* Main Content Area */}
        <div className={`${
          activeTab === 'for companies' 
            ? 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-300' 
            : 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300'
        } rounded-3xl flex-1 mx-8 my-6 transition-all duration-500 relative overflow-hidden`}>
          
          {/* Background Name */}
          <div className="absolute top-8 left-8 pointer-events-none">
            <div className="text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 opacity-15 leading-none">
              {activeTab === 'for companies' ? 'Tom' : 'Tess'}
            </div>
          </div>

          {/* AI Badge */}
          <div className="absolute top-32 md:top-36 lg:top-40 left-8">
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm">
              <img src="/Twitter_Verified_Badge.png" alt="Verified" className="w-4 h-4" />
              <span>
                {activeTab === 'for companies' ? 'AI Super Connector' : 'AI Headhunter'}
              </span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16 items-center min-h-full">
            {/* Left Content */}
            <div className="space-y-6 pt-24 lg:pt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                {activeTab === 'for companies' 
                  ? 'I help you connect to the best upcoming creators'
                  : 'I help you find brand deals that fit your vibe.'
                }
              </h2>
              
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg">
                {activeTab === 'for companies'
                  ? 'I listen to your needs and connect you with the best upcoming creators. Together, we can increase your brand awareness and reach. I\'ll introduce you to the right creators that Tess is working with.'
                  : 'I\'ll find you deals and you can continue with what you\'re good at. No need for expensive agencies. I\'ll put you into contact with local businesses that Tom is working with.'
                }
              </p>

              <div className="pt-4">
                <a 
                  href={activeTab === 'for companies' ? 'https://tally.so/r/mDRJXX' : 'https://tally.so/r/w77VJ6'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gray-900 text-white px-8 py-4 rounded-3xl font-semibold hover:bg-gray-800 transition-all duration-200 text-base inline-flex items-center justify-center min-w-[200px] shadow-[0_6px_0_0_#374151] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-1 active:translate-y-2 active:shadow-[0_0px_0_0_#374151]"
                >
                  <span>{activeTab === 'for companies' ? 'Join the waitlist of  Tom' : 'Join the waitlist of Tess'}</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl">→</span>
                </a>
              </div>
            </div>

            {/* Right Content - Influencer Showcase */}
            <div className="flex justify-center lg:justify-end">
              <div className="blur-md">
                <InfluencerShowcase activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vapi Widgets */}
      <vapi-widget
        public-key="8ec48727-d887-45fe-a643-50845e54a542"
        assistant-id="60c98986-4681-463a-8420-d46ffd3895f2"
        mode="voice"
        theme="dark"
        base-bg-color="#000000"
        accent-color="#14B8A6"
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

      <vapi-widget
        public-key="8ec48727-d887-45fe-a643-50845e54a542"
        assistant-id="a950c370-11c9-42d9-88c4-db2585a01879"
        mode="voice"
        theme="dark"
        base-bg-color="#000000"
        accent-color="#14B8A6"
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
  );
}

export default App;