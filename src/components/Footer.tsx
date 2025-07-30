interface FooterProps {
  activeTab: string;
}

const Footer = ({ activeTab }: FooterProps) => {
  return (
    <div className="container mx-auto px-6 pb-6">
      <div className="bg-white rounded-3xl transition-all duration-500 overflow-hidden shadow-sm border border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-12 md:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="text-xl font-black text-gray-900 tracking-tight">
                unbound
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connecting talent with opportunity through seamless, intent-based AI matching.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="space-y-6">
              <div className="font-semibold text-gray-900">Platform</div>
              <div className="space-y-4">
                <a href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  For Companies
                </a>
                <a href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  For freelancers
                </a>
                <a href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  How it Works
                </a>
                <a href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
              </div>
            </div>

            {/* Action Column */}
            <div className="space-y-6">
              <div className="font-semibold text-gray-900">Get Started</div>
              <div className="space-y-4">
                <a 
                  href={activeTab === 'for freelancers' ? 'https://tally.so/r/w77VJ6' : 'https://tally.so/r/mDRJXX'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300
                    ${activeTab === 'for freelancers' 
                      ? 'bg-indigo-500 hover:bg-indigo-600' 
                      : 'bg-teal-600 hover:bg-teal-700'
                    }`}
                >
                  Join Waitlist
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <p className="text-sm text-gray-500">
                  Have questions? <a href="#" className="text-gray-900 hover:underline">Contact us</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sm text-gray-400">
                © 2024 unbound. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 