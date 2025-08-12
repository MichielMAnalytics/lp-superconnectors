import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ManifestoSection from '../components/ManifestoSection';
import AIHeadhunters from '../components/AIHeadhunters';
import ExplanationSection from '../components/ExplanationSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const CompaniesPage = () => {
  useEffect(() => {
    const vapiScript = document.createElement('script');
    vapiScript.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    vapiScript.async = true;
    vapiScript.type = 'text/javascript';
    document.head.appendChild(vapiScript);
  }, []);

  const activeTab = 'for companies';

  return (
    <>
      <Header />
      <HeroSection activeTab={activeTab} />
      <ManifestoSection activeTab={activeTab} />
      <AIHeadhunters activeTab={activeTab} />
      <ExplanationSection activeTab={activeTab} />

      <div className="hidden md:block">
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

      <Footer activeTab={activeTab} />
    </>
  );
};

export default CompaniesPage;


