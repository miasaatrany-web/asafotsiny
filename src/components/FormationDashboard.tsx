import { Role } from '../types';

export function FormationDashboard({ role, onBack }: { role: Role, onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <button onClick={onBack} className="absolute top-6 left-6 text-gray-500 font-medium hover:text-gray-900">← Retour</button>
      <h1 className="text-3xl font-bold mb-12 text-gray-900">Formation {role}</h1>
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="p-8 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h2 className="text-xl font-bold text-green-700">Formation Métier</h2>
          <p className="text-gray-600 mt-4">Contenu de la formation métier pour {role}...</p>
        </div>
        <div className="p-8 border border-gray-200 rounded-lg bg-white shadow-sm">
          <h2 className="text-xl font-bold text-blue-700">Outillage</h2>
          <p className="text-gray-600 mt-4">Contenu de l'outillage pour {role}...</p>
        </div>
      </div>
    </div>
  );
}
