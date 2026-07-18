import { useState } from 'react';

export function RegistrationModal({ onRegister }: { onRegister: (name: string) => void }) {
  const [name, setName] = useState('');

  return (
    <div className="fixed inset-0 flex items-center justify-center p-6 z-50">
      <div className="absolute inset-0 bg-gray-900/50" />
      <img src="/src/assets/images/background_login_1784389257225.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full border border-gray-200 z-10">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Bienvenue sur PortfolioBuilder</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Créez votre portfolio professionnel facilement. 
          <br/>
          Entrez simplement votre nom pour commencer à explorer nos thèmes et outils.
        </p>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Votre nom"
          className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white mb-6 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
        />
        <button 
          onClick={() => name && onRegister(name)} 
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Rejoindre
        </button>
      </div>
    </div>
  );
}
