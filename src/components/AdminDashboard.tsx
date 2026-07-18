import { PortfolioData } from '../types';

export function AdminDashboard({ portfolios, onClose, onLogout }: { portfolios: PortfolioData[], onClose: () => void, onLogout: () => void }) {
  return (
    <div className="fixed inset-0 bg-slate-50 p-8 z-50 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black tracking-tight">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button onClick={onLogout} className="bg-red-100 text-red-600 px-6 py-3 rounded-2xl font-bold hover:bg-red-200 transition-colors">Déconnexion</button>
            <button onClick={onClose} className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-colors">
              Fermer
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolios.length > 0 ? portfolios.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black">{p.name}</h2>
              <p className="text-indigo-600 font-bold mb-4">{p.role}</p>
              <p className="text-sm text-slate-600">Bio: {p.bio.substring(0, 50)}...</p>
            </div>
          )) : (
            <p className="text-slate-500">Aucun portfolio trouvé.</p>
          )}
        </div>
      </div>
    </div>
  );
}
