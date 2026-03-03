import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const ProfileCompletion = () => {
    return (
        <div className="card" style={{ padding: '20px 24px' }}>
            <div className="flex justify-between items-center">
               <div>
                  <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={20} color="#4b5563" strokeWidth={2} />
                      <span className="font-semibold" style={{ fontSize: '15px', color: '#1f2937' }}>Profile Completed</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6b7280' }}>Mission complete! Profile at 100% and you're good to go!</p>
               </div>
               <CheckCircle2 size={24} color="#22c55e" strokeWidth={1.5} />
            </div>
        </div>
    )
}

export default ProfileCompletion;
