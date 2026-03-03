import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const EditProfileModal = ({ profile, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: profile.name || '',
    title: profile.title || '',
    location: profile.location || '',
    bio: profile.bio || '',
    email: profile.email || '',
    league: profile.league || '',
    rank: profile.rank || 0,
    points: profile.points || 0,
    skills: profile.skills ? profile.skills.join(', ') : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const updatedData = { ...profile, ...formData, skills: formData.skills.split(',').map(s => s.trim()) };
    onSave(updatedData);
  };

  const handleAiGenerate = () => {
    const role = formData.name ? formData.name.split(' ')[0] : 'Professional';
    const loc = formData.location ? `based in ${formData.location}` : '';
    const generatedBio = `Dynamic and results-driven ${role} ${loc}. Passionate about tackling complex challenges with scalable technologies and collaborating closely with cross-functional teams. Constantly learning and looking for opportunities to bring innovative solutions to life! Let's connect.`;
    setFormData({...formData, bio: generatedBio});
  };

  return (
    <div className="modal-overlay" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
      <div className="modal-content-exact">
        
        {/* Avatar Area */}
        <div className="avatar-wrapper" style={{ position: 'relative', width: 140, height: 140, margin: '0 auto 32px auto' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '3px dashed #cbd5e1', padding: '8px', boxSizing: 'border-box' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#fcd34d', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 14C8.68629 14 6 16.6863 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16.6863 15.3137 14 12 14Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <button style={{ position: 'absolute', bottom: 4, right: 4, width: 36, height: 36, borderRadius: '50%', backgroundColor: '#3b82f6', border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
            </button>
        </div>

        <form onSubmit={handleSumbit}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="edit-form-label">First Name *</label>
            <input type="text" name="name" className="edit-form-input" value={formData.name.split(' ')[0] || ''} onChange={(e) => setFormData({...formData, name: `${e.target.value} ${formData.name.split(' ').slice(1).join(' ')}`})} required />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="edit-form-label">Last Name *</label>
            <input type="text" className="edit-form-input" value={formData.name.split(' ').slice(1).join(' ') || ''} onChange={(e) => setFormData({...formData, name: `${formData.name.split(' ')[0]} ${e.target.value}`})} required />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="edit-form-label">Email ID *</label>
            <input type="email" name="email" className="edit-form-input" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="edit-form-label">Location</label>
            <input type="text" name="location" className="edit-form-input" value={formData.location} onChange={handleChange} />
          </div>
          
          <div className="form-group" style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label className="edit-form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 0 }}>
                    Bio <span style={{ fontSize: '13px', fontWeight: '400', color: '#9ca3af' }}>max character (500 - {formData.bio.length})</span>
                </label>
                <button type="button" onClick={handleAiGenerate} style={{ background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 12px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(168, 85, 247, 0.3)' }}>
                    <Sparkles size={12} fill="#fff" /> Auto Generate
                </button>
            </div>
            <textarea name="bio" className="edit-form-textarea" value={formData.bio} onChange={handleChange} />
          </div>

          <div className="upload-box">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                  <path d="M12 12v9"></path>
                  <path d="M12 12l-3 3"></path>
                  <path d="M12 12l3 3"></path>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <path d="M16 16l-4-4-4 4"></path>
              </svg>
              <button type="button" style={{ background: '#cbd5e1', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px', letterSpacing: '0.5px' }}>UPLOAD RESUME</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginTop: '40px' }}>
            <button type="button" onClick={onClose} style={{ background: 'transparent', color: '#3b82f6', border: 'none', fontWeight: '600', fontSize: '15px', cursor: 'pointer', padding: '10px 20px' }}>CANCEL</button>
            <button type="submit" style={{ background: '#eff6ff', color: '#3b82f6', border: 'none', fontWeight: '600', fontSize: '15px', borderRadius: '6px', padding: '10px 32px', cursor: 'pointer' }}>UPDATE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
