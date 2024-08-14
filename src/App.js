import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Countries = React.lazy(() => import('./pages/countries'));
const Header = React.lazy(() => import('./components/header'));


function App() {
  return (
    <BrowserRouter>
      <div>
      <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<Countries />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
