import { Routes, Route } from 'react-router-dom';
import TalentPage from './pages/FreelancersPage.tsx';
import CompaniesPage from './pages/CompaniesPage.tsx';
import HomePage from './pages/HomePage.tsx';

function App() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#f8fafc'}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
      </Routes>
    </div>
  );
}

export default App;