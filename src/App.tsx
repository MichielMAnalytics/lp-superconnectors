import React, { useState } from 'react';

const DashboardMockup = () => (
  <div className="bg-white rounded-2xl p-5 shadow-lg max-w-sm">
    {/* Gender Section */}
    <div className="mb-5">
      <h3 className="text-xs font-semibold text-gray-700 mb-2">Gender</h3>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Female</span>
          <span className="text-xs font-medium">69.53%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-blue-400 h-1.5 rounded-full" style={{width: '69.53%'}}></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Male</span>
          <span className="text-xs font-medium">30.47%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-red-400 h-1.5 rounded-full" style={{width: '30.47%'}}></div>
        </div>
      </div>
    </div>

    {/* Age & Gender Section */}
    <div className="mb-5">
      <h3 className="text-xs font-semibold text-gray-700 mb-2">Age & Gender</h3>
      <div className="flex justify-end mb-1.5">
        <div className="flex items-center space-x-2 text-xs">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1"></div>
            <span>male</span>
          </div>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1"></div>
            <span>female</span>
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { age: '45-54', male: 0.27, female: 2.16 },
          { age: '35-44', male: 4.7, female: 2.16 },
          { age: '25-34', male: 11.14, female: 3.25 },
          { age: '18-24', male: 37.43, female: 18.67 },
          { age: '13-17', male: 15.7, female: 6.72 }
        ].map((item, index) => (
          <div key={index} className="flex items-center text-xs">
            <div className="w-7 text-gray-600">{item.age}</div>
            <div className="flex-1 flex items-center ml-1.5">
              <div className="flex-1 bg-gray-200 rounded-full h-1 mr-1">
                <div className="bg-red-400 h-1 rounded-full" style={{width: `${item.male}%`}}></div>
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-1 ml-1">
                <div className="bg-blue-400 h-1 rounded-full" style={{width: `${item.female}%`}}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Countries and Cities */}
    <div className="grid grid-cols-2 gap-3">
      <div>
        <h3 className="text-xs font-semibold text-gray-700 mb-2">Countries</h3>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600">Germany</span>
            <span>69.53%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-800 h-0.5 rounded-full" style={{width: '69.53%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Switzerland</span>
            <span>7.12%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-600 h-0.5 rounded-full" style={{width: '7.12%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Canada</span>
            <span>2.81%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-400 h-0.5 rounded-full" style={{width: '2.81%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">United States</span>
            <span>1.75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-300 h-0.5 rounded-full" style={{width: '1.75%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Mexico</span>
            <span>0.54%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-200 h-0.5 rounded-full" style={{width: '0.54%'}}></div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-700 mb-2">Cities</h3>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600">Berlin</span>
            <span>69.53%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-800 h-0.5 rounded-full" style={{width: '69.53%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Hamburg</span>
            <span>7.12%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-600 h-0.5 rounded-full" style={{width: '7.12%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cologne</span>
            <span>2.81%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-400 h-0.5 rounded-full" style={{width: '2.81%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Toronto</span>
            <span>1.75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-300 h-0.5 rounded-full" style={{width: '1.75%'}}></div>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Halifax</span>
            <span>0.54%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div className="bg-gray-200 h-0.5 rounded-full" style={{width: '0.54%'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('for companies');
  const tabs = ['for companies', 'for creators'];

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-8 h-full flex flex-col">

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900 rounded-full p-1 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
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

        {/* Main Content Area */}
        <div className={`${
          activeTab === 'for companies' 
            ? 'bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300' 
            : 'bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-300'
        } rounded-3xl p-6 md:p-8 flex-1 flex items-center mx-8 my-6 transition-all duration-500`}>
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Left Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                {activeTab === 'for companies' 
                  ? 'We help you connect to the best creators'
                  : 'We help upcoming creators work with small businesses'
                }
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                {activeTab === 'for companies'
                  ? 'We help small businesses connect to upcoming creators. Together, you can bring both your brands to the next level.'
                  : 'Work together with small businesses and other upcoming creators to create something exciting. Create something that works!'
                }
              </p>

              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base">
                {activeTab === 'for companies' ? 'join the waitlist' : 'join now'}
              </button>
            </div>

            {/* Right Content - Dashboard Mockup */}
            <div className="flex justify-center">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;