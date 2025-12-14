import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage/homepage'
import Resume from './pages/resume/Resume'
import About_me from "./pages/about_me/about_me";
import Projects from "./pages/projects/projects";

function App() {

  return (
 <div className="App-shell">

    <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about-me" element={<About_me />} />
          <Route path="/projects" element={<Projects/>} />
          
    </Routes>


  </div>
  )}

export default App
