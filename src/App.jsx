import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Routes from './components/roots/Router'; // Your Routes component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="main-content flex-grow-1">
        <Routes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
      </div>
      <Footer />
    </div>
  );
};

export default App;
