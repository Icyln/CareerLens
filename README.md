# CareerLens

# AI-Powered CV Matching & Career Intelligence Platform

An AI-powered full-stack web application designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS), improve CV-job matching, and receive personalized career insights.

---

# 📌 Project Overview

Many companies use Applicant Tracking Systems (ATS) to automatically filter and rank resumes before they reach recruiters. As a result, many qualified candidates are rejected because their CVs do not contain the required keywords or alignment with job descriptions.

This project aims to solve that problem by providing:

* ATS score analysis
* CV-job matching
* Missing keyword detection
* Skill gap analysis
* Interactive CV editing
* Career intelligence insights
* AI-assisted recommendations

This project was inspired by my brother’s experience, where multiple job applications were rejected due to ATS mismatch despite having strong technical skills and qualifications.

---

# Features

## Authentication System

* User Registration
* User Login & Logout
* Role-based Access:

  * Admin
  * User

---

## CV Management

* Upload CV (PDF/DOCX)
* Store multiple CVs separately
* Maximum 5 uploads per day per user

---

## ATS Matching Engine

* ATS Match Score Calculation
* Keyword-Based Matching
* Semantic Similarity Analysis
* Missing Keywords Detection
* Skill Gap Identification

---

## Interactive CV Editor

* Edit CV sections interactively
* CV templates
* AI-assisted suggestions
* Resume optimization recommendations

---

## Career Intelligence Features

* Personalized Career Recommendations
* Skills to Learn
* Trending Skills Analysis
* Career Insights Dashboard

---

## Analytics Dashboard

* ATS Score Trends
* Skill Analysis
* Improvement Tracking
* Data Visualization

---

## Export Features

* Export CV as PDF
* Export CV as DOCX

---

# Technology Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Django
* Django REST Framework
* Python

## Database

* MySQL

## AI / NLP Technologies

* spaCy
* NLTK
* Scikit-learn
* Sentence Transformers
* Hugging Face Inference API (optional)

## Visualization

* Chart.js / Recharts

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# Project Structure

```bash
ATS-Career-Platform/
│
├── frontend/      # React Frontend
├── backend/       # Django Backend
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 3. Backend Setup

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run server:

```bash
python manage.py runserver
```

---

# 🗄️ Database Setup

Create MySQL database:

```sql
CREATE DATABASE ats_platform;
```

Update database settings in:

```bash
backend/config/settings.py
```

---

# Project Objectives

* Improve ATS matching accuracy
* Help users optimize resumes effectively
* Provide AI-driven career insights
* Build a responsive and modern full-stack web application
* Integrate AI and NLP technologies into real-world recruitment problems

---

# Future Improvements

* Real-time job market analysis
* Advanced AI resume rewriting
* Resume ranking system
* LinkedIn integration
* AI interview preparation assistant

---

# Author

Nang Myat Mary Htun

Final Year Project — AI-Powered CV Matching & Career Intelligence Platform

---

# License

This project is for educational and academic purposes.
