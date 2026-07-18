import { Role } from '../types';

export function SelectionPage({ onSelectRole, onBack }: { onSelectRole: (role: Role) => void, onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <button onClick={onBack} className="absolute top-6 left-6 text-gray-500 font-medium hover:text-gray-900">← Retour</button>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Quel type de portfolio voulez-vous créer ?</h1>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          Choisissez le type de portfolio qui correspond le mieux à votre profil pour personnaliser votre expérience. 
          Nous adapterons les outils et thèmes en conséquence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <button 
          onClick={() => onSelectRole('Community Manager')} 
          className="p-8 border border-gray-200 rounded-lg bg-white hover:border-green-600 hover:shadow-md transition-all text-left"
        >
          <h2 className="text-xl font-bold text-green-700">Community Manager</h2>
          <p className="text-gray-500 mt-2 text-sm">Gérez et développez des communautés en ligne avec des outils dédiés.</p>
        </button>
        <button 
          onClick={() => onSelectRole('Virtual Assistant')} 
          className="p-8 border border-gray-200 rounded-lg bg-white hover:border-blue-600 hover:shadow-md transition-all text-left"
        >
          <h2 className="text-xl font-bold text-blue-700">Virtual Assistant</h2>
          <p className="text-gray-500 mt-2 text-sm">Offrez un soutien administratif efficace à distance avec une structure claire.</p>
        </button>
      </div>
    </div>
  );
}
