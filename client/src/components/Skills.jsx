import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AddSkillModal from './AddSkillModal';

const Skills = ({ skills, onUpdate }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const validSkills = skills || [];

  return (
    <div className="card">
        <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 className="font-semibold" style={{ fontSize: '1rem' }}>Skills</h3>
          <button onClick={() => setIsAddModalOpen(true)} style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Plus size={16} color="var(--text-muted)" />
          </button>
        </div>
        <div className="flex" style={{ flexWrap: 'wrap' }}>
            {validSkills.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
            ))}
        </div>
        {isAddModalOpen && (
            <AddSkillModal 
                currentSkills={validSkills} 
                onClose={() => setIsAddModalOpen(false)} 
                onSave={async (newSkills) => { await onUpdate(newSkills); setIsAddModalOpen(false); }} 
            />
        )}
    </div>
  );
};

export default Skills;
