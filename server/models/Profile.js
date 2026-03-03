const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  bio: { type: String },
  email: { type: String },
  profilePicture: { type: String },
  league: { type: String, default: 'Bronze' },
  rank: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  careerVision: {
    targetRole: { type: String },
    growingInto: { type: String },
    spaceToGrow: { type: String },
    inspiredBy: { type: String }
  },
  skills: [{ type: String }],
  experience: [{
    role: { type: String },
    company: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String }
  }],
  education: [{
    degree: { type: String },
    institution: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String }
  }],
  certifications: [{
    name: { type: String },
    issuer: { type: String },
    description: { type: String },
    id: { type: String },
    providedOn: { type: String },
    link: { type: String }
  }]
});

module.exports = mongoose.model('Profile', profileSchema);
