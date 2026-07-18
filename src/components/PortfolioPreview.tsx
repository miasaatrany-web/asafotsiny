import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

export function PortfolioPreview({ data }: Props) {
  const themeClasses = {
    modern: 'bg-white text-gray-900 border-gray-200',
    minimal: 'bg-gray-50 text-gray-700 border-gray-200',
    bold: 'bg-indigo-900 text-white border-indigo-800',
    playful: 'bg-pink-50 text-pink-900 border-pink-100',
    elegant: 'bg-zinc-900 text-amber-100 border-zinc-800'
  };

  return (
    <div className={`p-6 border rounded-lg shadow-sm space-y-6 ${themeClasses[data.theme] || themeClasses.modern}`}>
      <div className="border-b border-current/10 pb-4">
        <h1 className="text-2xl font-bold">{data.name || 'Your Name'}</h1>
        <p className="text-sm font-medium mt-1 uppercase tracking-wider opacity-80">{data.role}</p>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider opacity-60">Professional Bio</h3>
        <p className="mt-2 text-sm leading-relaxed">{data.bio || 'Add a bio to showcase your experience...'}</p>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider opacity-60">Skills</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {data.skills.split(',').map((skill, i) => skill.trim() && (
            <span key={i} className="px-2 py-1 border border-current/20 rounded-md text-xs font-medium">{skill.trim()}</span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider opacity-60">Selected Projects</h3>
        <div className="mt-3 space-y-3">
          {data.projects.map((p, i) => (
            <div key={i} className="p-4 rounded-md border border-current/10">
              <p className="font-semibold text-sm">{p.title || 'Project Title'}</p>
              <p className="text-xs opacity-80 mt-1">{p.description || 'Description of the work performed...'}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider opacity-60">Formation</h3>
        <p className="mt-2 text-sm font-medium">Métier: {data.formation.metier || '...'}</p>
        <p className="text-sm font-medium">Outillage: {data.formation.outillage || '...'}</p>
      </div>
    </div>
  );
}
