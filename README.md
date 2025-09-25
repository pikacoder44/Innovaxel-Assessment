# Innovaxel Access Simulator 

## Overview

This is the **Innovaxel Access Simulator** project for the Fall Internship 2025.  
It simulates employee access to secure rooms based on access level, room timings, and cooldown periods.

- **Frontend:** Next.js 15 + Tailwind CSS v4  
- **Backend:** Node.js + Express  
- **API:** `/api/simaccess` returns access decisions for employees  

---

## Features

- Load a list of employees from JSON.
- Simulate access to rooms with a single click.
- Shows **Granted / Denied** status with reason.
- Cooldowns, room open/close times, and access levels are enforced.
- Smooth animations and modern fonts for UI.

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), Tailwind CSS v4, React  
- **Backend:** Node.js, Express  
- **Data:** Static JSON files (`employees.json`)  

---

## Folder Structure

/backend
├─ employees.json
├─ rooms.js
├─ utility/timeToMinutes.js
└─ index.js

/frontend
├─ app/page.jsx
├─ globals.css
└─ assets/raw_employee_data.js


---

## Setup Instructions

### 1- Backend

```bash
cd backend
npm install
```
Create a .env file
```bash
PORT=5000
```
Run the backend:
```bash
npm run dev
```

### 2- Frontend
```bash
cd frontend
npm install
npm run dev
```

Open your browser at http://localhost:3000.

Click Simulate Access to see results.

## Author

Syed Muhammad Hashir Ali

GitHub: https://github.com/pikacoder44