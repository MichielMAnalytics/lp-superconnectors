import { useState } from 'react';
import InfluencerShowcase from './components/InfluencerShowcase';



function App() {
  const [activeTab, setActiveTab] = useState('for companies');
  const tabs = ['for companies', 'for creators'];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fff2f2'}}>
      {/* Header */}
      <header className="w-full px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/logo_text.svg" alt="Tom & Jerry" className="h-12" />
        </div>

        {/* Navigation Tabs */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-900 rounded-2xl p-1 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
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
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8 flex flex-col" style={{height: 'calc(100vh - 120px)'}}>

        {/* Main Content Area */}
        <div className={`${
          activeTab === 'for companies' 
            ? 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-300' 
            : 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300'
        } rounded-3xl p-6 md:p-8 flex-1 flex items-center mx-8 my-6 transition-all duration-500 relative`}>
          {/* Top Left Name */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 flex flex-col items-center justify-center">
            <div className="text-8xl md:text-9xl font-black text-gray-900 opacity-20 mb-4">
              {activeTab === 'for companies' ? 'Tom' : 'Jerry'}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium text-gray-800 mb-12">
              <img src="/white-heavy-check-mark-svgrepo-com.svg" alt="Checkmark" className="w-5 h-5" />
              <span>
                {activeTab === 'for companies' ? 'AI Super Connector' : 'AI Headhunter'}
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                {activeTab === 'for companies' 
                  ? 'I help you  connect to the best upcoming creators'
                  : 'I help you find brand deals that fit your vibe.'
                }
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                {activeTab === 'for companies'
                  ? 'I listen to your needs and connect you with the best upcoming creators. Together, we can increase your brand awareness and reach. I\'ll introduce you to the right creators that Jerry is working with.'
                  : 'I\'ll find you deals and you can continue with what you\'re good at. No need for expensive agencies. I\'ll put you into contact with local businesses that Tom is working with.'
                }
              </p>

              <button className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-200 text-base flex items-center justify-center min-w-[200px] text-center shadow-[0_6px_0_0_#374151] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-1 active:translate-y-2 active:shadow-[0_0px_0_0_#374151]">
                <span>{activeTab === 'for companies' ? 'Speak to Tom' : 'Speak to Jerry'}</span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl">→</span>
              </button>
            </div>

            {/* Right Content - Influencer Showcase */}
            <div className="flex justify-center">
              <div className="blur-md">
                <InfluencerShowcase activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Only visible when scrolling down */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Meet Tom & Jerry!</h2>
          <p className="text-lg text-gray-800 mb-6 font-medium">
            Where upcoming creators and small businesses & startups become iconic duo's.
          </p>
          
          <div className="space-y-6">
            <p className="text-gray-700">
              If you're a <span className="bg-pink-200 px-2 py-1 rounded font-medium">rising online creator</span> or a <span className="bg-cyan-200 px-2 py-1 rounded font-medium">business with big vibes</span> and a smaller budget, we're here to spark the perfect match!
            </p>
            
            <p className="text-gray-600 italic">
              No cringe outreach. No awkward collabs. Just smart, authentic partnerships — powered by AI and made for your vibe.
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                👀 <span className="font-semibold">Creators:</span> link your socials, tell Jerry your story in a engaging phone conversation, and get matched to <span className="bg-pink-200 px-2 py-1 rounded font-medium">brands that make sense</span> for <span className="italic">your profile</span> and <span className="italic">your goals</span>.
              </p>
              
              <p className="text-gray-700">
                🛍️ <span className="font-semibold">Brands:</span> skip the influencer guessing. Call with Tom, and we'll connect you to the <span className="bg-cyan-200 px-2 py-1 rounded font-medium">right voices</span> who can actually move the needle for <span className="italic">your brand</span> and <span className="italic">your vibe</span>!
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-200 text-base flex items-center justify-center min-w-[200px] text-center shadow-[0_6px_0_0_#374151] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-1 active:translate-y-2 active:shadow-[0_0px_0_0_#374151]">
                <span>Speak to Tom</span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl">→</span>
              </button>
              
              <button className="group relative bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-200 text-base flex items-center justify-center min-w-[200px] text-center shadow-[0_6px_0_0_#374151] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-1 active:translate-y-2 active:shadow-[0_0px_0_0_#374151]">
                <span>Speak to Jerry</span>
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;