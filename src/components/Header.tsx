interface HeaderProps {
  activeTab: string;
  handleTabChange: (tab: string) => void;
}

const Header = ({ activeTab, handleTabChange }: HeaderProps) => {
  const tabs = ['for freelancers', 'for companies'];

  return (
    <div className="container mx-auto px-6 pt-6">
      <div className="bg-white rounded-3xl transition-all duration-500 overflow-hidden shadow-sm border border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-8 md:px-12 py-6">
          <div className="grid grid-cols-3 items-center">
            {/* Logo */}
            <div className="text-xl font-black text-gray-900 tracking-tight ml-[-44px]">
              unbound
            </div>

            {/* Navigation - Center Column */}
            <div className="flex justify-center">
              <div className="bg-black/10 backdrop-blur-sm rounded-full p-1 flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? `${tab === 'for freelancers' ? 'bg-indigo-500' : 'bg-teal-600'} text-white shadow-sm`
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Button - Right Column */}
            <div className="flex justify-end mr-[-44px]">
              <button 
                className="relative overflow-hidden px-10 py-2 rounded-full font-medium text-sm text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20"
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
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 