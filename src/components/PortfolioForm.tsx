import { ChangeEvent, useState } from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
}

export function PortfolioForm({ data, onChange }: Props) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleAddProject = () => {
    onChange({
      ...data,
      projects: [...data.projects, { title: '', description: '' }]
    });
  };

  const handleProjectChange = (index: number, field: 'title' | 'description', value: string) => {
    const newProjects = [...data.projects];
    newProjects[index][field] = value;
    onChange({ ...data, projects: newProjects });
  };

  return (
    <div className="space-y-6 p-8 border border-slate-200 rounded-3xl bg-white shadow-sm">
      <h2 className="text-2xl font-black text-slate-900 tracking-tight">Configure Portfolio</h2>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Role</label>
        <select name="role" value={data.role} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50 focus:ring-2 focus:ring-indigo-500">
          <option value="Community Manager">Community Manager</option>
          <option value="Virtual Assistant">Virtual Assistant</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Theme</label>
        <select name="theme" value={data.theme} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50">
          <option value="modern">Modern</option>
          <option value="minimal">Minimal</option>
          <option value="bold">Bold</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Name</label>
        <input name="name" value={data.name} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Bio</label>
        <textarea name="bio" value={data.bio} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50 min-h-[100px]" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Skills (comma-separated)</label>
        <input name="skills" value={data.skills} onChange={handleInputChange} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50" />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Projects</label>
        {data.projects.map((project, index) => (
          <div key={index} className="space-y-2 mb-4 p-4 border border-slate-100 rounded-2xl bg-slate-50">
            <input placeholder="Title" value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} className="w-full border border-slate-200 p-2 rounded-xl" />
            <textarea placeholder="Description" value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} className="w-full border border-slate-200 p-2 rounded-xl" />
          </div>
        ))}
        <button onClick={handleAddProject} className="bg-slate-900 text-white p-3 rounded-2xl w-full text-sm font-semibold hover:bg-slate-800 transition-colors">Add Project</button>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Social Links (format: platform:url)</label>
        <textarea name="socialLinks" onChange={(e) => {
          const links = e.target.value.split('\n').map(l => {
            const [platform, url] = l.split(':');
            return { platform: platform?.trim(), url: url?.trim() };
          }).filter(l => l.platform && l.url);
          onChange({ ...data, socialLinks: links });
        }} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50 min-h-[80px]" placeholder="e.g. LinkedIn:https://linkedin.com/in/..." />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Media URLs (comma-separated)</label>
        <input name="media" onChange={(e) => onChange({ ...data, media: e.target.value.split(',').map(m => m.trim()) })} className="w-full border border-slate-200 p-3 rounded-2xl bg-slate-50" placeholder="e.g. photo1.jpg, video1.mp4" />
      </div>
    </div>
  );
}
