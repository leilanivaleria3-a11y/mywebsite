import { useState } from 'react'
import { Routes, Route, HashRouter } from "react-router-dom";
import Projects from "./pages/projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavigationBar from './NavigationBar';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div>
            <HashRouter>
            <NavigationBar></NavigationBar>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              </Routes>
              </HashRouter>
              </div>
    </>
  );
}

export default App
