import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const AddEducationModal = ({ onClose, onSave, initialData }) => {
  const isEdit = !!initialData;
  // If editing, try to split degree back into degree and field
  const parseDegree = (degreeStr) => {
    if (!degreeStr) return { degree: '', field: '' };
    const parts = degreeStr.split(' - ');
    return { degree: parts[0] || '', field: parts.slice(1).join(' - ') || '' };
  };
  const parsed = isEdit ? parseDegree(initialData.degree) : { degree: '', field: '' };

  const [formData, setFormData] = useState({
    institution: initialData?.institution || '',
    degree: parsed.degree,
    field: parsed.field,
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
    if (!formData.institution || !formData.degree) return;
    onSave({
        institution: formData.institution,
        degree: formData.field ? `${formData.degree} - ${formData.field}` : formData.degree,
        location: formData.location,
        startDate: formData.startDate,
        endDate: formData.isCurrent ? 'Present' : formData.endDate
    });
  };

  return (
    <div className="modal-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 60 }}>
      <div className="modal-content-exact" style={{ maxWidth: '600px', padding: '32px 40px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '24px', color: '#4b5563' }}>{isEdit ? 'Edit Education' : 'Add Your Education'}</h2>
        
        <form>
          <div className="form-group" style={{ marginBottom: '16px', position: 'relative' }}>
            <label className="edit-form-label">College *</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="institution" value={formData.institution} onChange={handleChange} className="edit-form-input" style={{ paddingRight: '40px' }} required />
                <ChevronDown size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px', pointerEvents: 'none' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Degree *</label>
            <input type="text" name="degree" value={formData.degree} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Field of Study *</label>
            <input type="text" name="field" value={formData.field} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Location *</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px', position: 'relative' }}>
            <label className="edit-form-label">Date of joining *</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Mmm YYYY" className="edit-form-input" style={{ paddingRight: '40px' }} required />
                <Calendar size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px' }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <input type="checkbox" id="current_edu" name="isCurrent" checked={formData.isCurrent} onChange={handleChange} style={{ width: '16px', height: '16px', accentColor: '#3b82f6', border: '1px solid #d1d5db', borderRadius: '4px' }} />
            <label htmlFor="current_edu" style={{ fontSize: '13px', color: '#4b5563' }}>Currently studying here / not completed *</label>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '13px', color: '#6b7280' }}>
            OR
          </div>

          <div className="form-group" style={{ marginBottom: '24px', position: 'relative' }}>
            <label className="edit-form-label">Date of completion *</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="Mmm YYYY" className="edit-form-input" style={{ paddingRight: '40px' }} disabled={formData.isCurrent} />
                <Calendar size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px' }} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
            <button type="button" onClick={onClose} style={{ background: '#fff', color: '#374151', border: '1px solid #d1d5db', fontWeight: '500', fontSize: '14px', borderRadius: '6px', padding: '8px 24px', cursor: 'pointer' }}>Cancel</button>
            <button type="button" onClick={handleSave} style={{ background: '#3b82f6', color: '#fff', border: 'none', fontWeight: '500', fontSize: '14px', borderRadius: '6px', padding: '8px 24px', cursor: 'pointer' }}>{isEdit ? 'Update' : 'Add'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEducationModal;
