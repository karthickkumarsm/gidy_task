import React from 'react';
import { Mail, Download, MapPin, MoreVertical } from 'lucide-react';

const ProfileHeader = ({ profile, onEdit }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-4 items-center">
            {profile.profilePicture ? (
                <img src={profile.profilePicture} alt="Profile" style={{ width: 80, height: 80, borderRadius: '50%' }} />
            ) : (
                <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#fcd34d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 14C8.68629 14 6 16.6863 6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20C18 16.6863 15.3137 14 12 14Z" fill="white"/>
                    </svg>
                </div>
            )}
            <div>
              <h1 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {profile.name} <span style={{ fontSize: '0.875rem', fontWeight: '400', color: 'var(--text-muted)' }}>{profile.title}</span>
              </h1>
              <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm text-muted flex items-center gap-2">
                    <MapPin size={16} /> {profile.location}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ecfdf5', padding: '4px 10px', borderRadius: '16px', border: '1px solid #10b981', cursor: 'default' }}>
                      <div className="pulse-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                      <span style={{ fontSize: '12px', fontWeight: '500', color: '#047857' }}>Open to opportunities</span>
                  </div>
              </div>
            </div>
        </div>
        <button onClick={onEdit} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <MoreVertical size={20} color="var(--text-muted)" />
        </button>
      </div>

      <p className="text-sm text-main mb-4">{profile.bio}</p>

      <div className="flex justify-between items-center mt-6">
        <div>
            <div className="flex gap-2 items-center mb-4">
              <Mail size={16} color="var(--primary-blue)" />
              <a href={`mailto:${profile.email}`} className="text-sm">{profile.email}</a>
            </div>
            <button className="btn btn-outline" style={{ background: '#eff6ff' }}>
                <Download size={16} className="mb-0" style={{ marginRight: '0.5rem' }} /> Download Resume
            </button>
        </div>
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--border-radius-md)', display: 'flex', gap: '1.5rem', alignItems: 'center', border: '1px solid var(--border-color)' }}>
             <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold' }}>⭐</div>
             <div className="flex flex-col items-center">
                 <span className="text-xs text-muted">League</span>
                 <span className="font-semibold">{profile.league}</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="text-xs text-muted">Rank</span>
                 <span className="font-semibold">{profile.rank}</span>
             </div>
             <div className="flex flex-col items-center">
                 <span className="text-xs text-muted">Points</span>
                 <span className="font-semibold">{profile.points}</span>
             </div>
        </div>
      </div>
      <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <a href="#" style={{ fontSize: '0.875rem', fontWeight: '600', color: '#eab308' }}>View My Rewards &gt;</a>
      </div>
    </div>
  );
};

export default ProfileHeader;
