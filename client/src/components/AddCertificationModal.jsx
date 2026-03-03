import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const AddCertificationModal = ({ onClose, onSave, initialData }) => {
  const isEdit = !!initialData;
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    issuer: initialData?.issuer || '',
    link: initialData?.link || '',
    id: initialData?.id || '',
    issuedDate: initialData?.issuedDate || '',
    expiryDate: initialData?.expiryDate || '',
    description: initialData?.description || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.issuer) return;
    onSave({
        name: formData.name,
        issuer: formData.issuer,
        link: formData.link,
        id: formData.id,
        providedOn: formData.issuedDate ? `${formData.issuedDate}${formData.expiryDate ? ' - Expiry: ' + formData.expiryDate : ''}` : '',
        description: formData.description
    });
  };

  return (
    <div className="modal-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 60 }}>
      <div className="modal-content-exact" style={{ maxWidth: '600px', padding: '32px 40px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '24px', color: '#374151' }}>{isEdit ? 'Edit Certification' : 'Add Certification'}</h2>
        
        <form>
          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Certification *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Provider *</label>
            <input type="text" name="issuer" value={formData.issuer} onChange={handleChange} className="edit-form-input" required />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Certificate Url</label>
            <input type="text" name="link" value={formData.link} onChange={handleChange} className="edit-form-input" />
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="edit-form-label">Certificate ID</label>
            <input type="text" name="id" value={formData.id} onChange={handleChange} className="edit-form-input" />
          </div>

          <div className="form-group" style={{ marginBottom: '16px', position: 'relative' }}>
            <label className="edit-form-label">Issued Date</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="issuedDate" value={formData.issuedDate} onChange={handleChange} placeholder="dd-mm-yyyy" className="edit-form-input" style={{ paddingRight: '40px' }} />
                <Calendar size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '16px', position: 'relative' }}>
            <label className="edit-form-label">Expiry Date</label>
            <div style={{ position: 'relative' }}>
                <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="dd-mm-yyyy" className="edit-form-input" style={{ paddingRight: '40px' }} />
                <Calendar size={16} color="#9ca3af" style={{ position: 'absolute', right: '12px', top: '12px' }} />
            </div>
          </div>
          
          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="edit-form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Description <span style={{ fontSize: '12px', fontWeight: '400', color: '#9ca3af' }}>max character (200 - {formData.description.length})</span>
            </label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="edit-form-textarea" />
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

export default AddCertificationModal;
