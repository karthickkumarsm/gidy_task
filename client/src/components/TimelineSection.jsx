import React, { useState, useRef, useEffect } from 'react';
import { Plus, MoreVertical, Building2, GraduationCap, Award, Pencil, Trash2 } from 'lucide-react';
import AddExperienceModal from './AddExperienceModal';
import AddEducationModal from './AddEducationModal';
import AddCertificationModal from './AddCertificationModal';

const getIcon = (type) => {
  switch (type) {
    case 'experience': return <Building2 size={28} color="#60a5fa" strokeWidth={1.5} />;
    case 'education': return <GraduationCap size={28} color="#9ca3af" strokeWidth={1.5} />;
    case 'certification': return <Award size={28} color="#60a5fa" strokeWidth={1.5} />;
    default: return <Building2 size={28} color="#60a5fa" strokeWidth={1.5} />;
  }
};

const getLabel = (type) => {
  switch (type) {
    case 'experience': return 'experience';
    case 'education': return 'education';
    case 'certification': return 'certification';
    default: return 'item';
  }
};

const ContextMenu = ({ type, onEdit, onDelete, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const label = getLabel(type);

  return (
    <div
      ref={menuRef}
      style={{
        position: 'absolute',
        top: '0px',
        left: '32px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        border: '1px solid #e5e7eb',
        zIndex: 50,
        minWidth: '180px',
        padding: '6px 0',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={onEdit}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
          padding: '10px 16px', background: 'transparent', border: 'none',
          fontSize: '14px', color: '#374151', cursor: 'pointer', textAlign: 'left'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = '#f9fafb'}
        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
      >
        <Pencil size={15} color="#6b7280" /> Edit {label}
      </button>
      <button
        onClick={onDelete}
        style={{
          display: 'flex', alignItems: 'center', gap: '10px', width: '100%',
          padding: '10px 16px', background: 'transparent', border: 'none',
          fontSize: '14px', color: '#374151', cursor: 'pointer', textAlign: 'left'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = '#f9fafb'}
        onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
      >
        <Trash2 size={15} color="#6b7280" /> Delete
      </button>
    </div>
  );
};

const TimelineSection = ({ title, type, items, onUpdate }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const validItems = items || [];

  const handleAdd = (newItem) => {
    onUpdate([...validItems, newItem]);
    setIsAddModalOpen(false);
  };

  const handleDelete = (index) => {
    const newArray = [...validItems];
    newArray.splice(index, 1);
    onUpdate(newArray);
    setOpenMenuIndex(null);
  };

  const handleEditSave = (index, updatedItem) => {
    const newArray = [...validItems];
    newArray[index] = updatedItem;
    onUpdate(newArray);
    setEditingIndex(null);
  };

  return (
    <div className="card">
      <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 className="font-semibold" style={{ fontSize: '1rem' }}>{title}</h3>
        <button onClick={() => setIsAddModalOpen(true)} style={{ background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Plus size={16} color="var(--text-muted)" />
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {validItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ 
                width: '60px', 
                height: '60px', 
                flexShrink: 0, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: type === 'education' ? '#f4f4f5' : '#eff6ff', 
                borderRadius: '8px', 
                border: type === 'education' ? '1px solid #e4e4e7' : '1px solid #bfdbfe' 
            }}>
                {getIcon(type)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                      <h4 className="font-medium">{item.role || item.degree || item.name}</h4>
                      <p className="text-sm text-main">{item.company || item.institution || item.issuer}{item.location ? `, ${item.location}` : ''}</p>
                      <p className="text-xs text-muted mt-1">
                          {item.providedOn ? `Provided on: ${item.providedOn}` : `Started: ${item.startDate} - Ended: ${item.endDate}`}
                      </p>
                      {item.description && <p className="text-xs text-muted mt-2">{item.description}</p>}
                      {item.id && <p className="text-xs text-muted">ID NO: {item.id} {item.link && <a href={item.link}>{item.link}</a>}</p>}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <button 
                        onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
                    >
                        <MoreVertical size={18} color="#9ca3af" />
                    </button>
                    {openMenuIndex === index && (
                      <ContextMenu 
                        type={type}
                        onEdit={() => { setEditingIndex(index); setOpenMenuIndex(null); }}
                        onDelete={() => handleDelete(index)}
                        onClose={() => setOpenMenuIndex(null)}
                      />
                    )}
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modals */}
      {isAddModalOpen && type === 'experience' && <AddExperienceModal onClose={() => setIsAddModalOpen(false)} onSave={handleAdd} />}
      {isAddModalOpen && type === 'education' && <AddEducationModal onClose={() => setIsAddModalOpen(false)} onSave={handleAdd} />}
      {isAddModalOpen && type === 'certification' && <AddCertificationModal onClose={() => setIsAddModalOpen(false)} onSave={handleAdd} />}

      {/* Edit Modals (reuse Add modals with pre-filled data) */}
      {editingIndex !== null && type === 'experience' && (
        <AddExperienceModal 
          initialData={validItems[editingIndex]}
          onClose={() => setEditingIndex(null)} 
          onSave={(updatedItem) => handleEditSave(editingIndex, updatedItem)} 
        />
      )}
      {editingIndex !== null && type === 'education' && (
        <AddEducationModal 
          initialData={validItems[editingIndex]}
          onClose={() => setEditingIndex(null)} 
          onSave={(updatedItem) => handleEditSave(editingIndex, updatedItem)} 
        />
      )}
      {editingIndex !== null && type === 'certification' && (
        <AddCertificationModal 
          initialData={validItems[editingIndex]}
          onClose={() => setEditingIndex(null)} 
          onSave={(updatedItem) => handleEditSave(editingIndex, updatedItem)} 
        />
      )}
    </div>
  );
};

export default TimelineSection;
