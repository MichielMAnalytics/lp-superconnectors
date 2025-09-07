import { Routes, Route } from 'react-router-dom';
import TalentPage from './pages/FreelancersPage.tsx';
import CompaniesPage from './pages/CompaniesPage.tsx';
import HomePage from './pages/HomePage.tsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8fafc'}}>
      {/* ElevenLabs widget pinned to the left, lifted above Vapi bubble */}
      <div style={{ position: 'fixed', left: '20px', bottom: '120px', zIndex: 50 }}>
        <elevenlabs-convai agent-id="agent_2101k4h4t5xnfqqadd974g8a0a4y"></elevenlabs-convai>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </div>
  );
}

export default App;