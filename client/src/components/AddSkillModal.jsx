import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddSkillModal = ({ currentSkills, onClose, onSave }) => {
  const [skills, setSkills] = useState(currentSkills || []);
  const [inputValue, setInputValue] = useState('');

  const addCurrentSkill = () => {
    if (inputValue.trim() && !skills.includes(inputValue.trim())) {
      setSkills([...skills, inputValue.trim()]);
    }
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      addCurrentSkill();
    }
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleSave = () => {
    onSave(skills);
  };

  return (
    <div className="modal-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 60 }} onClick={onClose}>
      <div className="modal-content-exact" style={{ maxWidth: '600px', padding: '24px 32px' }} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: '#64748b' }}>Skills</h2>
        
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 14px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', minHeight: '100px', alignContent: 'flex-start' }}>
          {skills.map((skill, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', padding: '4px 8px 4px 12px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '13px', color: '#475569', marginRight: '6px' }}>{skill}</span>
              <div 
                onClick={() => removeSkill(idx)}
                style={{ backgroundColor: '#cbd5e1', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                  <X size={10} color="#fff" strokeWidth={3} />
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '180px', gap: '6px' }}>
            <input 
              type="text" 
              placeholder="Type skill and press Enter" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ border: 'none', outline: 'none', fontSize: '14px', color: '#333', flex: 1, background: 'transparent' }} 
            />
            {inputValue.trim() && (
              <button type="button" onClick={addCurrentSkill} style={{ background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', padding: '2px 10px', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }}>+ Add</button>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
          <button type="button" onClick={onClose} style={{ background: 'transparent', color: '#3b82f6', border: 'none', fontWeight: '600', fontSize: '13px', cursor: 'pointer', padding: '8px 16px', letterSpacing: '0.5px' }}>CANCEL</button>
          <button type="button" onClick={handleSave} style={{ background: '#eff6ff', color: '#3b82f6', border: 'none', fontWeight: '600', fontSize: '13px', borderRadius: '4px', padding: '6px 20px', cursor: 'pointer', letterSpacing: '0.5px' }}>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;
