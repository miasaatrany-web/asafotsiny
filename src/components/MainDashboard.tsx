import { Role } from '../types';

export function MainDashboard({ role, onSelectAction, onBack }: { role: Role, onSelectAction: (action: 'builder' | 'formation') => void, onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <button onClick={onBack} className="absolute top-6 left-6 text-gray-500 font-medium hover:text-gray-900">← Retour</button>
      <h1 className="text-3xl font-bold mb-12 text-gray-900">Que souhaitez-vous faire ?</h1>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <button 
          onClick={() => onSelectAction('builder')} 
          className="p-8 border border-gray-200 rounded-lg bg-white hover:border-blue-600 hover:shadow-md transition-all text-left"
        >
          <h2 className="text-xl font-bold text-blue-700">Créer mon portfolio</h2>
          <p className="text-gray-500 mt-2 text-sm">Construisez votre portfolio professionnel.</p>
        </button>
        <button 
          onClick={() => onSelectAction('formation')} 
          className="p-8 border border-gray-200 rounded-lg bg-white hover:border-green-600 hover:shadow-md transition-all text-left"
        >
          <h2 className="text-xl font-bold text-green-700">Accéder à la formation</h2>
          <p className="text-gray-500 mt-2 text-sm">Accédez aux ressources de formation pour {role}.</p>
        </button>
      </div>
    </div>
  );
}
