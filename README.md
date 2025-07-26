# 🚀 Summer Camp Client-Side

<div align="center">

![Logo](https://i.ibb.co/ynwZBxh/logo.png)
[![GitHub stars](https://img.shields.io/github/stars/Eagl3Eyes/summer-camp-client-side?style=for-the-badge)](https://github.com/Eagl3Eyes/summer-camp-client-side/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Eagl3Eyes/summer-camp-client-side?style=for-the-badge)](https://github.com/Eagl3Eyes/summer-camp-client-side/network)
[![GitHub issues](https://img.shields.io/github/issues/Eagl3Eyes/summer-camp-client-side?style=for-the-badge)](https://github.com/Eagl3Eyes/summer-camp-client-side/issues)

**A single-page application for managing Summer Camp information.**

[Live Demo](https://summer-camp-4cc35.web.app/) 

</div>

## 📖 Overview

This project is a single-page application built with React, Vite, and Tailwind CSS, designed for managing information related to a summer camp.  It's a client-side application that interacts with a backend service (not included in this repository).  The application's purpose is to provide a user-friendly interface for viewing and potentially interacting with summer camp data.  The target audience is summer camp administrators or staff needing a web-based tool for camp management.


## ✨ Features

- **User Interface:**  Clean and responsive design using Tailwind CSS.
- **Data Display:**  Presents summer camp-related information (specific details depend on the backend API).  TODO: Add details about displayed data based on the backend integration.


## 🖥️ Screenshots

<img width="1920" height="3705" alt="image" src="https://github.com/user-attachments/assets/af342725-d8e7-402c-9bd4-871ff505f6d2" />
<img width="1920" height="1363" alt="image" src="https://github.com/user-attachments/assets/e5088dda-5994-49fe-873e-a1f68c0a1d44" />
<img width="1920" height="1363" alt="image" src="https://github.com/user-attachments/assets/2b20f761-a024-43d4-891c-daded3734215" />
<img width="1920" height="2104" alt="image" src="https://github.com/user-attachments/assets/56efc4bd-b434-4370-a043-69a6897a1559" />
<img width="1920" height="1556" alt="image" src="https://github.com/user-attachments/assets/52a4c48a-b322-4328-a36d-90d8d05e0443" />


## 🛠️ Tech Stack

**Frontend:**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-B441D0?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js (version >= 16.0.0)
- npm (or yarn)
- Firebase CLI (for deployment - optional)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Eagl3Eyes/summer-camp-client-side.git
   cd summer-camp-client-side
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173`


## 📁 Project Structure

```
summer-camp-client-side/
├── public/            # Static assets
├── src/               # Source code
│   └── ...           # React components and other source files.
├── package.json       # Project dependencies
├── package-lock.json  # Dependency lock file
├── firebase.json      # Firebase configuration
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── ...
```

## ⚙️ Configuration

### Environment Variables

No environment variables are explicitly used in this application, however Firebase configuration is handled through the `firebase.json` file.

### Configuration Files

- `firebase.json`: Configures the Firebase deployment settings.
- `vite.config.js`: Configures the Vite build process.
- `tailwind.config.js`: Configures Tailwind CSS styles.
- `postcss.config.js`: Configures PostCSS plugins.


## 🔧 Development

### Available Scripts

| Command       | Description             |
|---------------|--------------------------|
| `npm run dev` | Starts the development server |
| `npm run build`| Creates a production build   |
| `npm run preview`| Starts the preview server for a production build |


## 🚀 Deployment

The application is designed to be deployed using Firebase.  To deploy:

1. Make sure you have the Firebase CLI installed (`npm install -g firebase-tools`).
2. Login to Firebase (`firebase login`).
3. Deploy the application with `firebase deploy`.


---

<div align="center">

**⭐ Star this repo if you find it helpful!**

</div>
