import React from 'react';
import { Target } from 'lucide-react';

const CareerVision = ({ vision }) => {
  if (!vision) return null;

  return (
    <div className="card">
      <div className="flex justify-between items-start" style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
          <div>
            <p className="text-sm text-muted mb-2">You're Career Vision</p>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{vision.targetRole}</h2>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Target size={20} color="#f97316" />
          </div>
      </div>
      
      <div className="flex" style={{ gap: '2rem' }}>
        <div style={{ flex: 1 }}>
            <p className="text-xs text-muted mb-1">What you're growing into right now</p>
            <p className="font-medium">{vision.growingInto}</p>
        </div>
        <div style={{ flex: 1 }}>
            <p className="text-xs text-muted mb-1">The space you want to grow in</p>
            <p className="font-medium">{vision.spaceToGrow}</p>
        </div>
        <div style={{ flex: 1 }}>
            <p className="text-xs text-muted mb-1">Inspired by</p>
            <p className="font-medium">{vision.inspiredBy}</p>
        </div>
      </div>
    </div>
  );
};

export default CareerVision;
