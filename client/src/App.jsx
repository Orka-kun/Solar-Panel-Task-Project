import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ThemeCard from './components/ThemeCard';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';

const App = () => {
  const [panels, setPanels] = useState([]);
  const [totalRaised, setTotalRaised] = useState(0);
  const [totalPanels, setTotalPanels] = useState(3090);
  const [remainingPanels, setRemainingPanels] = useState(863);
  const [error, setError] = useState(null);
//WAITING FOR BACKEND DEPLOYMENT*******************************************************************************
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/solar-panels')
  //     .then(response => {
  //       if (!response.ok) throw new Error('Network response was not ok');
  //       return response.json();
  //     })
  //     .then(data => {
  //       setPanels(data);
  //       const total = data.reduce((sum, panel) => sum + Number(panel.amount), 0); // Convert string to number
  //       setTotalRaised(total);
  //       const donatedPanels = data.reduce((sum, panel) => sum + panel.quantity, 0);
  //       setRemainingPanels(totalPanels - donatedPanels);
  //     })
  //     .catch(error => setError(error.message));
  // }, []);

  // const handleDonate = (quantity) => {
  //   const panel = panels.find(p => p.quantity === quantity);
  //   if (panel) {
  //     alert(`Donated ${quantity} panel(s) for $${panel.amount}`);
  //     fetch('http://localhost:8000/api/solar-panels', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ quantity, amount: panel.amount }),
  //     })
  //       .then(response => {
  //         if (!response.ok) throw new Error('Failed to donate');
  //         return response.json();
  //       })
  //       .then(data => setPanels([...panels, data]))
  //       .catch(error => setError(error.message));
  //   }
  // };
//WAITING FOR BACKEND DEPLOYMENT*******************************************************************************


const handleDonate = (quantity) => {
         alert(`Donation of ${quantity} panel(s) is simulated. Backend not connected.`);
       };//TEMPORARY 2 LINES ONLY
//WAITING FOR BACKEND DEPLOYMENT*******************************************************************************





  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <Header />
      <ThemeCard panels={panels} totalRaised={totalRaised} totalPanels={totalPanels} remainingPanels={remainingPanels} onDonate={handleDonate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
{/*         TEMPORARY 1 LINE ADDED */}
        <Route path="*" element={<Home />} /> 
{/*         TEMPORARY 1 LINE ADDED */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
