# TurfHub — Artificial Football Turf Facility Booking Platform

TurfHub is a mobile-first web platform engineered to eliminate friction in discovering, reserving, and managing artificial football turf facilities across Dhaka, Bangladesh.

---

## 🛠 Tech Stack

- **Frontend**: React 18+ (Vite), Tailwind CSS, React Leaflet (OpenStreetMap)
- **Backend**: Node.js, Express.js (RESTful API Architecture)
- **Database**: MongoDB Atlas (2dsphere geospatial indexing, ACID transactions)
- **Payment Sandbox**: SSLCOMMERZ & bKash sandbox runner

---

## 📁 Repository Structure

```
Turf HUB/
├── backend/               # Express.js REST API
│   ├── src/
│   │   ├── config/        # Database & Cloudinary configurations
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Mongoose data schemas
│   │   ├── routes/        # Express API endpoints
│   │   ├── middlewares/   # Auth, JWT, RBAC, and error handlers
│   │   └── server.js      # Server entry point
│   ├── .env.example       # Example environment variables
│   └── package.json
├── frontend/              # React.jsx + Vite client
│   ├── src/               # React components and styling
│   ├── tailwind.config.js # Tailwind CSS theme configuration
│   └── package.json
└── Project Documents/     # Academic proposal & Product Requirements Document (PRD)
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18+ or v20+ (with npm)
- **MongoDB**: MongoDB Atlas connection string or local MongoDB instance

---

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB Atlas URI
npm run dev
```

The backend server runs on `http://localhost:5000` (Health check: `http://localhost:5000/api/health`).

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend Vite development server runs on `http://localhost:5173`.
