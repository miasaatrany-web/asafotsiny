import { useState, useEffect } from 'react';
import { PortfolioForm } from './components/PortfolioForm';
import { PortfolioPreview } from './components/PortfolioPreview';
import { RegistrationModal } from './components/RegistrationModal';
import { AdminDashboard } from './components/AdminDashboard';
import { MainDashboard } from './components/MainDashboard';
import { FormationDashboard } from './components/FormationDashboard';
import { SelectionPage } from './components/SelectionPage';
import { PortfolioData, Role } from './types';

export default function App() {
  const [userName, setUserName] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState<Role | null>(null);
  const [view, setView] = useState<'main' | 'builder' | 'formation'>('main');
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioData>({
    role: 'Community Manager',
    name: '',
    bio: '',
    skills: '',
    projects: [],
    formation: { metier: '', outillage: '' },
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
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (!users.includes(name)) {
      users.push(name);
      localStorage.setItem('users', JSON.stringify(users));
    }
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
    setRole(null);
    setView('main');
  };

  const generateShareLink = () => {
    const data = btoa(JSON.stringify(portfolio));
    const url = `${window.location.origin}${window.location.pathname}?data=${data}`;
    navigator.clipboard.writeText(url);
    alert('Lien de partage copié!');
  };

  if (!userName) return <RegistrationModal onRegister={handleRegister} />;
  if (isAdmin) return <AdminDashboard portfolios={portfolios} users={JSON.parse(localStorage.getItem('users') || '[]')} onClose={() => setIsAdmin(false)} onLogout={handleLogout} />;
  if (!role) return <SelectionPage onSelectRole={(r) => { setRole(r); setPortfolio(p => ({ ...p, role: r })); setView('main'); }} onBack={() => setUserName('')} />;
  
  if (view === 'main') return <MainDashboard role={role} onSelectAction={setView} onBack={() => setRole(null)} />;
  if (view === 'formation') return <FormationDashboard role={role} onBack={() => setView('main')} />;

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
          <PortfolioForm data={portfolio} onChange={setPortfolio} onBack={() => setView('main')} />
          <PortfolioPreview data={portfolio} />
        </div>
      </div>
    </div>
  );
}
