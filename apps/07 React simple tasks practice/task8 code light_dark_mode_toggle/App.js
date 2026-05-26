import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
