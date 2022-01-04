import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/home'));
const InfiniteLoading = lazy(() => import('./pages/infinite-loading'));


function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="infinite-loading" element={<InfiniteLoading />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
