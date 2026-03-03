import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import CareerVision from './components/CareerVision';
import ProfileCompletion from './components/ProfileCompletion';
import Skills from './components/Skills';
import TimelineSection from './components/TimelineSection';
import EditProfileModal from './components/EditProfileModal';
import { fetchProfile, updateProfile } from './api';

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await fetchProfile();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async (updatedData) => {
    try {
      const savedProfile = await updateProfile(updatedData);
      setProfile(savedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert('Failed to update profile');
    }
  };

  if (loading) return <div className="container mt-4">Loading profile...</div>;
  if (!profile) return <div className="container mt-4">Failed to load profile. Please ensure backend is running.</div>;

  return (
    <div>
      <Navbar />
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="flex flex-col gap-6">
          <ProfileHeader profile={profile} onEdit={() => setIsEditing(true)} />
          <CareerVision vision={profile.careerVision} />
          
          <div className="grid-layout">
            {/* Left Sidebar (Small Column) */}
            <aside className="flex flex-col gap-6">
               <ProfileCompletion />
               <Skills 
                 skills={profile.skills} 
                 onUpdate={(newSkills) => handleSaveProfile({ ...profile, skills: newSkills })} 
               />
            </aside>
            
            {/* Right Main Content (Big Column) */}
            <main className="flex flex-col gap-6">
              <TimelineSection 
                title="Experience" 
                type="experience" 
                items={profile.experience} 
                onUpdate={(newItems) => handleSaveProfile({ ...profile, experience: newItems })} 
              />
              <TimelineSection 
                title="Education" 
                type="education" 
                items={profile.education} 
                onUpdate={(newItems) => handleSaveProfile({ ...profile, education: newItems })} 
              />
              <TimelineSection 
                title="Certification" 
                type="certification" 
                items={profile.certifications} 
                onUpdate={(newItems) => handleSaveProfile({ ...profile, certifications: newItems })} 
              />
            </main>
          </div>
        </div>
      </div>

      {isEditing && (
        <EditProfileModal 
          profile={profile} 
          onClose={() => setIsEditing(false)} 
          onSave={handleSaveProfile} 
        />
      )}
    </div>
  );
}

export default App;
