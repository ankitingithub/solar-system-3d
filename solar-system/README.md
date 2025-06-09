# 🌌 React + Three.js 3D Solar System

This project is a fully interactive 3D simulation of the solar system built using **React**, **Three.js**, and **React Three Fiber**.

---

## 🚀 Features

- 3D solar system with the Sun and 8 orbiting planets
- Real-time orbital speed controls for each planet
- Realistic lighting, planetary rotation, and orbit paths
- Background starfield
- Responsive UI with clean code architecture

---

## 📁 Folder Structure

```
src/
├── App.jsx                 # Main App component
├── main.jsx                # Entry point
├── styles.css              # Styling for canvas and UI
└── components/
    ├── Planet.jsx          # Animates a single orbiting planet
    ├── SolarSystem.jsx     # 3D scene setup and rendering
    └── Controls.jsx        # Slider UI for real-time speed control
```

---

## 📦 Tech Stack

- React
- Vite (bundler)
- Three.js (via @react-three/fiber)
- @react-three/drei (for orbit controls and stars)

---

## 🧪 Live Demo Instructions

### 1. Clone the Project
```bash
git clone <your-repo-url>
cd solar-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Project
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎮 Controls

- 🖱️ Use mouse to rotate/pan/zoom around the 3D solar system
- 🎚️ Adjust each planet’s orbital speed using sliders in real-time

---

Made with ❤️ using React + Three.js by Ankit Sahu
