import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isTalent = location.pathname.startsWith('/talent');
  const isCompanies = location.pathname.startsWith('/companies');

  return (
    <div className="container mx-auto px-6 pt-6">
      <div className="bg-white rounded-3xl transition-all duration-500 overflow-hidden shadow-sm border border-black/[0.03]">
        <div className="w-full px-8 md:px-12 py-6">
          <div className="grid grid-cols-3 items-center">
            {/* Logo */}
            <Link to="/" className="text-xl font-black text-gray-900 tracking-tight">
              unbound
            </Link>

            {/* Navigation - Center Column */}
            <div className="flex justify-center">
              <nav className="flex items-center gap-8">
                <Link
                  to="/talent"
                  className={`pb-1 text-sm font-medium border-b-2 ${
                    isTalent ? 'text-gray-900 border-gray-900' : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  for talent
                </Link>
                <Link
                  to="/companies"
                  className={`pb-1 text-sm font-medium border-b-2 ${
                    isCompanies ? 'text-gray-900 border-gray-900' : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  for companies
                </Link>
              </nav>
            </div>

            {/* Action Button - Right Column */}
            <div className="flex justify-end">
              <a 
                href={isTalent ? 'https://tally.so/r/w77VJ6' : 'https://tally.so/r/mDRJXX'}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 