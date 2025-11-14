import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage/homepage'
import Resume from './pages/resume/Resume'
import About_me from "./pages/about_me/about_me";

function App() {

  return (
 <div className="App-shell">
  <Link to={"/"}>
    <h1>Hello World</h1>
  </Link>
    <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about-me" element={<About_me />} />
    </Routes>


  </div>
  )}

export default App
