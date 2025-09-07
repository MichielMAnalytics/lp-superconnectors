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

  // Mobile audio unlock + mic permission primer (helps iOS Safari)
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    const onFirstGesture = async () => {
      try {
        const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          if (ctx.state === 'suspended') {
            await ctx.resume();
          }
          const buffer = ctx.createBuffer(1, 1, 22050);
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(ctx.destination);
          source.start(0);
          source.onended = () => source.disconnect();
        }

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Prompt mic permission proactively so the widget can use it
          await navigator.mediaDevices.getUserMedia({ audio: true }).catch(() => undefined);
        }
      } catch {
        // ignore; some browsers may block programmatic unlock
      } finally {
        window.removeEventListener('touchstart', onFirstGesture as any);
        window.removeEventListener('click', onFirstGesture as any);
      }
    };

    window.addEventListener('touchstart', onFirstGesture as any, { once: true, passive: true });
    window.addEventListener('click', onFirstGesture as any, { once: true });

    return () => {
      window.removeEventListener('touchstart', onFirstGesture as any);
      window.removeEventListener('click', onFirstGesture as any);
    };
  }, []);

  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8fafc'}}>
      {/* ElevenLabs widget pinned to the left, lifted above Vapi bubble */}
      <div style={{ position: 'fixed', left: '20px', bottom: 'calc(env(safe-area-inset-bottom, 0px) + 120px)', zIndex: 9999, pointerEvents: 'auto' }}>
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