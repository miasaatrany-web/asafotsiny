import { useState } from 'react';

export function RegistrationModal({ onRegister }: { onRegister: (name: string) => void }) {
  const [name, setName] = useState('');

  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-6 z-50">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full">
        <h2 className="text-2xl font-black mb-2 tracking-tight">Bienvenue</h2>
        <p className="text-slate-500 mb-6 text-sm">Entrez votre nom pour commencer à créer votre portfolio.</p>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Votre nom"
          className="w-full border border-slate-200 p-4 rounded-2xl bg-slate-50 mb-6" 
        />
        <button 
          onClick={() => name && onRegister(name)} 
          className="w-full bg-indigo-600 text-white p-4 rounded-2xl font-bold hover:bg-indigo-700 transition-colors"
        >
          Rejoindre
        </button>
      </div>
    </div>
  );
}
