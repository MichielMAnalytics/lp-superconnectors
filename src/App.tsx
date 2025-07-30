import { useState, useEffect } from 'react';
import InfluencerShowcase from './components/InfluencerShowcase';
import ExplanationSection from './components/ExplanationSection';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ManifestoSection from './components/ManifestoSection';
import Footer from './components/Footer';
import AIHeadhunters from './components/AIHeadhunters';

function App() {
  const [activeTab, setActiveTab] = useState('for freelancers');
  const [showArrow, setShowArrow] = useState(false);
  const [arrowDirection, setArrowDirection] = useState('');
  const tabs = ['for freelancers', 'for companies'];

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
        setArrowDirection(tab === 'for companies' ? 'to-tom' : 'to-tess');
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
    <div className="min-h-screen" style={{backgroundColor: '#f8fafc'}}>
      {/* Header */}
      <Header activeTab={activeTab} handleTabChange={handleTabChange} />

      {/* Animated Arrow */}
      {showArrow && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div 
            className={`absolute transition-all duration-1000 ease-in-out ${
              arrowDirection === 'to-tom' 
                ? 'animate-arrow-to-tom' 
                : 'animate-arrow-to-tess'
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
              width="48" 
              height="48"
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] opacity-40 ${arrowDirection === 'to-tom' ? 'scale-x-[-1]' : ''}`}
            />
          </div>
        </div>
      )}

      {/* Rest of the components */}
      <HeroSection activeTab={activeTab} handleTabChange={handleTabChange} />
      <ManifestoSection activeTab={activeTab} />
      <AIHeadhunters activeTab={activeTab} handleTabChange={handleTabChange} />
      <ExplanationSection activeTab={activeTab} />

      {/* Vapi Widgets */}
      <div className="hidden md:block">
        <div style={{ display: activeTab === 'for freelancers' ? 'block' : 'none' }}>
          <vapi-widget
            public-key="8ec48727-d887-45fe-a643-50845e54a542"
            assistant-id="a950c370-11c9-42d9-88c4-db2585a01879"
            mode="voice"
            theme="light"
            base-bg-color="#ffffff"
            accent-color="#6366F1"
            border-color="#000000"
            cta-button-color="#6366F1"
            cta-button-text-color="#ffffff"
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

      <div className="hidden md:block">
        <div style={{ display: activeTab === 'for companies' ? 'block' : 'none' }}>
          <vapi-widget
            public-key="8ec48727-d887-45fe-a643-50845e54a542"
            assistant-id="60c98986-4681-463a-8420-d46ffd3895f2"
            mode="voice"
            theme="light"
            base-bg-color="#ffffff"
            accent-color="#0D9488"
            border-color="#000000"
            cta-button-color="#0D9488"
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
      </div>

      <Footer activeTab={activeTab} />
    </div>
  );
}

export default App;