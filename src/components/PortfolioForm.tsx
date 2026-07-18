import { ChangeEvent, useState } from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
  onBack: () => void;
}

export function PortfolioForm({ data, onChange, onBack }: Props) {
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
    <div className="space-y-6 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900">Configure Portfolio</h2>
        <button onClick={onBack} className="text-gray-500 font-medium hover:text-gray-900">← Retour</button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
        <select name="role" value={data.role} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none">
          <option value="Community Manager">Community Manager</option>
          <option value="Virtual Assistant">Virtual Assistant</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
        <select name="theme" value={data.theme} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none">
          <option value="modern">Modern</option>
          <option value="minimal">Minimal</option>
          <option value="bold">Bold</option>
          <option value="playful">Playful</option>
          <option value="elegant">Elegant</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input name="name" value={data.name} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
        <textarea name="bio" value={data.bio} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none min-h-[100px]" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Skills (comma-separated)</label>
        <input name="skills" value={data.skills} onChange={handleInputChange} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Projects</label>
        {data.projects.map((project, index) => (
          <div key={index} className="space-y-2 mb-4 p-3 border border-gray-200 rounded-md bg-gray-50">
            <input placeholder="Title" value={project.title} onChange={(e) => handleProjectChange(index, 'title', e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white outline-none focus:ring-1 focus:ring-indigo-500" />
            <textarea placeholder="Description" value={project.description} onChange={(e) => handleProjectChange(index, 'description', e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white outline-none focus:ring-1 focus:ring-indigo-500" />
          </div>
        ))}
        <button onClick={handleAddProject} className="bg-gray-900 text-white px-4 py-2 rounded-md w-full text-sm font-medium hover:bg-gray-800 transition-colors">Add Project</button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Formation - Métier</label>
        <input name="metier" value={data.formation.metier} onChange={(e) => onChange({ ...data, formation: { ...data.formation, metier: e.target.value } })} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Formation - Outillage</label>
        <input name="outillage" value={data.formation.outillage} onChange={(e) => onChange({ ...data, formation: { ...data.formation, outillage: e.target.value } })} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Social Links (format: platform:url)</label>
        <textarea name="socialLinks" onChange={(e) => {
          const links = e.target.value.split('\n').map(l => {
            const [platform, url] = l.split(':');
            return { platform: platform?.trim(), url: url?.trim() };
          }).filter(l => l.platform && l.url);
          onChange({ ...data, socialLinks: links });
        }} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none min-h-[80px]" placeholder="e.g. LinkedIn:https://linkedin.com/in/..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Media URLs (comma-separated)</label>
        <input name="media" onChange={(e) => onChange({ ...data, media: e.target.value.split(',').map(m => m.trim()) })} className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. photo1.jpg, video1.mp4" />
      </div>
    </div>
  );
}
