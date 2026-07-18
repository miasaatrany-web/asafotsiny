import { useState, useEffect } from 'react';
import { PortfolioForm } from './components/PortfolioForm';
import { PortfolioPreview } from './components/PortfolioPreview';
import { RegistrationModal } from './components/RegistrationModal';
import { AdminDashboard } from './components/AdminDashboard';
import { PortfolioData } from './types';

export default function App() {
  const [userName, setUserName] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioData>({
    role: 'Community Manager',
    name: '',
    bio: '',
    skills: '',
    projects: [],
    theme: 'modern',
    socialLinks: [],
    media: []
  });

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setUserName(savedName);
      if (savedName === 'miasaatrany') setIsAdmin(true);
    }
    const savedPortfolios = JSON.parse(localStorage.getItem('portfolios') || '[]');
    setPortfolios(savedPortfolios);
  }, []);

  const handleRegister = (name: string) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    setPortfolio(prev => ({ ...prev, name }));
    if (name === 'miasaatrany') setIsAdmin(true);
  };

  const handleSave = () => {
    const updated = [...portfolios.filter(p => p.name !== portfolio.name), portfolio];
    setPortfolios(updated);
    localStorage.setItem('portfolios', JSON.stringify(updated));
    alert('Portfolio sauvegardé localement!');
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
    setIsAdmin(false);
  };

  const generateShareLink = () => {
    const data = btoa(JSON.stringify(portfolio));
    const url = `${window.location.origin}${window.location.pathname}?data=${data}`;
    navigator.clipboard.writeText(url);
    alert('Lien de partage copié!');
  };

  if (!userName) return <RegistrationModal onRegister={handleRegister} />;
  if (isAdmin) return <AdminDashboard portfolios={portfolios} onClose={() => setIsAdmin(false)} onLogout={handleLogout} />;

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Portfolio Builder</h1>
          <div className="flex gap-4">
            <button onClick={handleLogout} className="bg-red-100 text-red-600 px-6 py-3 rounded-2xl font-bold hover:bg-red-200 transition-colors">Déconnexion</button>
            <button onClick={handleSave} className="bg-slate-200 text-slate-900 px-6 py-3 rounded-2xl font-bold hover:bg-slate-300 transition-colors">Enregistrer</button>
            <button onClick={generateShareLink} className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-colors">Partager</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <PortfolioForm data={portfolio} onChange={setPortfolio} />
          <PortfolioPreview data={portfolio} />
        </div>
      </div>
    </div>
  );
}
