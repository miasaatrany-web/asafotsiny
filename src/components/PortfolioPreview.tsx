import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

export function PortfolioPreview({ data }: Props) {
  const themeClasses = {
    modern: 'bg-white text-slate-900',
    minimal: 'bg-slate-50 text-slate-700',
    bold: 'bg-indigo-950 text-white'
  };

  return (
    <div className={`p-8 border border-slate-200 rounded-3xl shadow-sm space-y-8 ${themeClasses[data.theme] || themeClasses.modern}`}>
      <div className="border-b border-current/10 pb-6">
        <h1 className="text-4xl font-black tracking-tighter">{data.name || 'Your Name'}</h1>
        <p className="text-lg font-bold mt-2 uppercase tracking-widest opacity-80">{data.role}</p>
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Professional Bio</h3>
        <p className="mt-3 leading-relaxed">{data.bio || 'Add a bio to showcase your experience...'}</p>
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {data.skills.split(',').map((skill, i) => skill.trim() && (
            <span key={i} className="px-4 py-2 border border-current/20 rounded-xl text-xs font-semibold">{skill.trim()}</span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Selected Projects</h3>
        <div className="mt-4 space-y-4">
          {data.projects.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl border border-current/10">
              <p className="font-bold">{p.title || 'Project Title'}</p>
              <p className="text-sm opacity-80 mt-2">{p.description || 'Description of the work performed...'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
