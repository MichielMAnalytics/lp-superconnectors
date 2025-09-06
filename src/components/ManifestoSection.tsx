import { useEffect } from 'react';

const ManifestoSection = () => {
  useEffect(() => {
    const src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const vapiScript = document.createElement('script');
      vapiScript.src = src;
      vapiScript.async = true;
      vapiScript.type = 'text/javascript';
      document.head.appendChild(vapiScript);
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mx-auto" style={{ width: "800px", height: "320px" }}>
          <vapi-widget
            public-key="8ec48727-d887-45fe-a643-50845e54a542"
            assistant-id="7e1249af-7cc6-4859-8e85-3b0467cc5b05"
            mode="voice"
            theme="dark"
            base-bg-color="#000000"
            accent-color="#14B8A6"
            cta-button-color="#000000"
            cta-button-text-color="#ffffff"
            border-radius="large"
            size="full"
            position="bottom-right"
            title="TALK WITH AI"
            start-button-text="Start"
            end-button-text="End Call"
            chat-first-message="Hey, How can I help you today?"
            chat-placeholder="Type your message..."
            voice-show-transcript="true"
            consent-required="true"
            consent-title="Terms and conditions"
            consent-content="By clicking &quot;Agree,&quot; and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
            consent-storage-key="vapi_widget_consent"
          ></vapi-widget>
        </div>
      </div>
    </div>
  );
};

export default ManifestoSection; 