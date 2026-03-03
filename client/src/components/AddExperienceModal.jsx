import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const AddExperienceModal = ({ onClose, onSave, initialData }) => {
  const isEdit = !!initialData;
  const [formData, setFormData] = useState({
    role: initialData?.role || '',
    company: initialData?.company || '',
    location: initialData?.location || '',
    startDate: initialData?.startDate || '',
    endDate: initialData?.endDate === 'Present' ? '' : (initialData?.endDate || ''),
    isCurrent: initialData?.endDate === 'Present' || false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSave = () => {
    if (!formData.role || !formData.company) return;
    onSave({
        role: formData.role,
        company: formData.company,
        location: formData.location,
        startDate: formData.startDate,
        endDate: formData.isCurrent ? 'Present' : formData.endDate
    });
  };

  return (
    <div className="modal-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 60 }}>
      <div className="modal-content-exact" style={{ maxWidth: '600px', padding: '32px 40px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px', color: '#374151' }}>{isEdit ? 'Edit Experience' : 'Add Experience'}</h2>
        
        <form>
          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Role *</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Company Name *</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="edit-form-input" />
          </div>

          <div className="form-group" style={{ marginBottom: '16px', position: 'relative' }}>
            <label className="edit-form-label">Date of joining</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Mmm YYYY" className="edit-form-input" style={{ paddingRight: '40px' }} />
                <Calendar size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '12px', position: 'relative' }}>
            <label className="edit-form-label">Date of leaving</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="Mmm YYYY" className="edit-form-input" style={{ paddingRight: '40px' }} disabled={formData.isCurrent} />
                <Calendar size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px' }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <input type="checkbox" id="current_role" name="isCurrent" checked={formData.isCurrent} onChange={handleChange} style={{ width: '16px', height: '16px', accentColor: '#3b82f6', border: '1px solid #d1d5db', borderRadius: '4px' }} />
            <label htmlFor="current_role" style={{ fontSize: '13px', color: '#4b5563' }}>Currently working in this role</label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
            <button type="button" onClick={onClose} style={{ background: 'transparent', color: '#3b82f6', border: 'none', fontWeight: '600', fontSize: '13px', cursor: 'pointer', padding: '8px 16px', letterSpacing: '0.5px' }}>CANCEL</button>
            <button type="button" onClick={handleSave} style={{ background: '#eff6ff', color: '#3b82f6', border: 'none', fontWeight: '600', fontSize: '13px', borderRadius: '4px', padding: '6px 20px', cursor: 'pointer', letterSpacing: '0.5px' }}>{isEdit ? 'UPDATE' : 'ADD'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExperienceModal;
