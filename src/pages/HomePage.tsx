import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ManifestoSection from '../components/ManifestoSection';
import AIHeadhunters from '../components/AIHeadhunters';
import ExplanationSection from '../components/ExplanationSection';
import Footer from '../components/Footer';

const HomePage = () => {
  // Home defaults to talent tone for hero/sections
  const activeTab = 'for talent';
  return (
    <>
      <Header />
      <HeroSection activeTab={activeTab} />
      <ManifestoSection activeTab={activeTab} />
      <AIHeadhunters activeTab={activeTab} />
      <ExplanationSection activeTab={activeTab} />
      <Footer activeTab={activeTab} />
    </>
  );
};

export default HomePage;


