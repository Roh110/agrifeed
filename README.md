
# 🌾 AgriSmart AI — Feed & Silage Quality Testing System

## 1. Project Overview

AgriSmart AI is a software-based platform designed to help farmers and farm managers analyze animal feed and silage quality, understand nutritional composition, monitor feed quality, and receive feeding recommendations.

The platform aims to make feed quality assessment more accessible through a web dashboard, AI/ML-based analysis, historical records, and data-driven recommendations.

This version focuses entirely on **software**, without requiring physical sensors or hardware devices.

## 2. Problem Statement

Animal feed quality directly affects livestock health, milk production, and farm productivity. Traditional feed testing can require laboratory facilities, time, and additional expenses.

AgriSmart AI aims to provide a digital platform for feed analysis, quality monitoring, and ration recommendations to support informed farm management decisions.

## 3. Objectives

- Provide a centralized dashboard for feed quality monitoring.
- Display nutritional information such as moisture, crude protein, fiber, fat, and ash.
- Generate a feed quality score.
- Provide feeding and ration recommendations.
- Maintain feed analysis history.
- Display alerts for potential feed quality issues.
- Support farm management and monitoring.
- Integrate AI/ML models through a backend API.
- Provide a scalable architecture for future improvements.

## 4. Key Features

### Dashboard
- Feed sample statistics
- Average feed quality score
- Farm overview
- Recent alerts
- Nutrient analysis charts

### Feed Analysis
- Feed or silage image upload interface
- Nutrient analysis result display
- Feed quality score
- Quality status
- Potential mycotoxin risk information

### Recommendations
- Suggested feed type
- Daily feed quantity
- Protein target
- Energy target
- Feeding guidance

### History and Monitoring
- Previous analysis records
- Feed quality trends
- Alerts and notifications
- Farm-level monitoring

## 5. Technology Stack

### Frontend
- React.js
- Vite
- JavaScript
- React Router
- Axios
- Recharts
- Lucide React
- CSS

### Backend (Planned)
- Python
- FastAPI
- REST API

### AI/ML (Planned)
- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

### Database (Planned)
- PostgreSQL
- SQLAlchemy

## 6. Project Architecture

```text
AgriSmart-AI/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── context/
│       ├── utils/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── backend/
│   └── app/
│       ├── api/
│       ├── models/
│       ├── schemas/
│       ├── services/
│       ├── database/
│       ├── core/
│       └── main.py
│
├── ml/
│   ├── models/
│   ├── training/
│   ├── preprocessing/
│   ├── datasets/
│   └── inference/
│
├── database/
│   └── schema.sql
│
├── uploads/
├── docs/
├── README.md
└── .gitignore
```

## 7. Frontend Components

The frontend is organized into reusable React components.

- `Navbar.jsx` — Top navigation bar and user profile.
- `Sidebar.jsx` — Main navigation menu.
- `DashboardCard.jsx` — Dashboard statistics.
- `NutrientCard.jsx` — Individual nutrient information.
- `QualityScore.jsx` — Feed quality score display.
- `NutrientChart.jsx` — Nutrient composition chart.
- `FeedUpload.jsx` — Feed sample upload interface.
- `ScanResult.jsx` — Analysis result display.
- `RecommendationCard.jsx` — Feeding recommendation display.
- `AlertCard.jsx` — Feed quality alerts.
- `LoadingSpinner.jsx` — Loading indicator.

### Planned Pages

- Dashboard
- Feed Analysis
- Results
- History
- Recommendations
- Alerts
- Farm Management
- Login and Registration

## 8. Installation and Setup

### Prerequisites

Install the following:

- Node.js and npm
- Python 3
- Visual Studio Code
- Git (optional)

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd AgriSmart-AI
```

If you already have the project locally, open its folder in VS Code instead.

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

Install the required packages if they are not already present:

```bash
npm install axios react-router-dom recharts lucide-react
npm install -D vite @vitejs/plugin-react
```

### Step 3: Run the Frontend

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

Keep the terminal open while using the application.

## 9. Frontend Configuration

Ensure `frontend/package.json` contains the following scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

Ensure `frontend/src/main.jsx` imports the application and stylesheet:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 10. Backend Setup (Planned)

From the project root, create and activate a Python virtual environment:

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
```

Install backend dependencies after creating `requirements.txt`:

```powershell
pip install -r requirements.txt
```

The backend will provide REST API endpoints for feed analysis, recommendations, user management, farms, alerts, and dashboard statistics.

## 11. AI/ML Integration (Planned)

The planned AI/ML module will support:

- Nutrient prediction
- Feed quality classification
- Recommendation generation
- Data preprocessing
- Model inference through backend services

**Important:** Reliable nutrient predictions require suitable laboratory-verified training data and validated models. Uploading an image alone does not establish accurate nutrient percentages. Any sample values currently displayed in the dashboard are illustrative placeholders until a validated analysis pipeline is integrated.

## 12. Current Development Status

### Implemented Frontend Components

- Navbar
- Sidebar
- DashboardCard
- NutrientCard
- QualityScore
- NutrientChart
- FeedUpload
- ScanResult
- RecommendationCard
- AlertCard
- LoadingSpinner

### In Progress

- Dashboard page integration
- CSS styling and responsive layout
- Feed analysis page
- Results and history pages
- Backend API integration
- Database configuration
- AI/ML model integration
- Authentication and farm management

The project is under active development. Features marked as planned or in progress should not be considered production-ready.

## 13. Future Enhancements

- Secure authentication and role-based access
- Multi-farm dashboards
- Multilingual user interface
- Offline support and local data storage
- PDF report generation
- Historical nutrient trend analysis
- Validated AI/ML predictions
- Database-backed records
- Cloud deployment
- Integration with laboratory test datasets

## 14. Project Goals

AgriSmart AI aims to support farmers and farm managers with accessible feed quality information, structured analysis records, and data-driven feeding guidance through a software-only platform.

## 15. License

This project is currently under development. Add an appropriate open-source or project-specific license before distributing it publicly.
