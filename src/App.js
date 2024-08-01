import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
