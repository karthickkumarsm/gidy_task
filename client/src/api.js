const API_URL = 'http://localhost:5000/api';

export const fetchProfile = async () => {
  const res = await fetch(`${API_URL}/profile`);
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
};

export const updateProfile = async (profileData) => {
  const res = await fetch(`${API_URL}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profileData)
  });
  if (!res.ok) throw new Error('Failed to update profile');
  return res.json();
};
