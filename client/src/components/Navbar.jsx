import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid var(--border-color)', height: '60px', display: 'flex', alignItems: 'center', padding: '0 2rem', justifyContent: 'space-between' }}>
      <div className="flex items-center gap-4">
        {/* Placeholder for Gidy Logo */}
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: 'var(--primary-blue)', marginRight: '4px' }}>&lt;</span> Gidy
        </div>
        <ul className="flex items-center gap-4 text-sm" style={{ listStyle: 'none', marginLeft: '2rem' }}>
          <li><a href="#" style={{ color: 'var(--text-muted)' }}>Jobs</a></li>
          <li><a href="#" style={{ color: 'var(--text-muted)' }}>Hackathons</a></li>
          <li><a href="#" style={{ color: 'var(--text-muted)' }}>Projects</a></li>
          <li><a href="#" style={{ color: 'var(--text-main)', fontWeight: '500' }}>Tasks</a></li>
          <li><a href="#" style={{ color: 'var(--text-muted)' }}>Organization</a></li>
        </ul>
      </div>
      <div>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem' }}>
          K
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
