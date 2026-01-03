## Full Stack Assignment – Contact App (MERN)

Live app: https://fullstackassignment-three.vercel.app
Backend API: https://contact-app-backend-zuat.onrender.com

### 1) Quickstart (Local)
1. Backend
	 - From `backend`: `npm install`
	 - Set `.env`:
		 - `PORT=5000`
		 - `MONGODB_URI=your MongoDB URI`
	 - Run: `npm start`
2. Frontend
	 - From `frontend`: `npm install`
	 - Create `.env`:
		 - `REACT_APP_API_URL=http://localhost:5000`
	 - Run: `npm start`
3. Open http://localhost:3000

### 2) Deployment (what’s already live)
- Backend: Render (Node/Express) at https://contact-app-backend-zuat.onrender.com
- Frontend: Vercel (React) at https://fullstackassignment-three.vercel.app

### 3) Re-deploy Steps
- Backend (Render): push to GitHub main → Render auto-deploys. Ensure env var `MONGODB_URI` is set.
- Frontend (Vercel): push to GitHub main → Vercel auto-deploys. Ensure env var `REACT_APP_API_URL` points to the backend URL.

### 4) API Endpoints (backend)
- `GET /api/contacts` – list contacts
- `POST /api/contacts` – create contact `{ name, email, phone, message? }`
- `DELETE /api/contacts/:id` – remove contact

### 5) Tech Stack
- Frontend: React, fetch API
- Backend: Node.js, Express
- Database: MongoDB Atlas (Mongoose)

### 6) How to use the live site
1) Open https://fullstackassignment-three.vercel.app
2) Fill Name, Email, Phone (Message optional)
3) Click “Add Contact”
4) See the contact in the list; use Delete to remove


