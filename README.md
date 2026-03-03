# Gidy Profile Page Replica

## Setup Instructions
1. Navigate to the `server` directory: `cd server`
2. Install backend dependencies: `npm install`
3. The server is configured to use MongoDB Atlas. Ensure the `.env` file in the `server` directory contains your database string:
   ```env
   PORT=5000
   MONGODB_URI=<your_mongodb_cluster_url>
   ```
4. Start the backend server: `node server.js`
5. In a new terminal, navigate to the frontend: `cd client`
6. Install frontend dependencies: `npm install`
7. Start the Vite development server: `npm run dev`
8. Open `http://localhost:5173` (or the port specified by Vite) in your browser.

## Tech Stack
- **Frontend**: React.js, Vite, Vanilla CSS (for pixel-perfect design matching), Lucide-React (Icons).
- **Backend**: Node.js, Express.js, Mongoose.
- **Database**: MongoDB (Atlas Cloud).

## Innovative Features Added

### 1. AI Bio Assistant (Magic Sparkle)
- **What it is**: Inside the "Edit Profile" modal, there is now a "Generate with AI" magic wand button next to the Bio input field. Clicking it automatically drafts a professional bio based on the user's current Name and Location.
- **Why I chose it**: Writing a professional summary from scratch is traditionally the highest friction point when users fill out career profiles. By introducing an AI drafting assistant, we drastically reduce writer's block, saving the user time and encouraging them to complete their profiles with high-quality, professional summaries.

### 2. "Open to Opportunities" Live Status Badge
- **What it is**: An interactive, softly pulsing "Open to Work" status indicator integrated into the main profile header.
- **Why I chose it**: Given Gidy is a networking and professional growth platform (featuring "Jobs" and "Hackathons"), signaling availability is a core user need. A dynamic, modern pulsing UI element immediately communicates active job-seeking status to recruiters without the user needing to type it into their title, keeping the profile clean while maximizing their visibility.
