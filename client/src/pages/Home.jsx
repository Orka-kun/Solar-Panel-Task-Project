import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import DonationCard from '../components/DonationCard';
import ProjectGallery from '../components/ProjectGallery';
import background from '../assets/background.jpg'
import sicon from '../assets/sicon.png'
import ThemeCard from '../components/ThemeCard';
import Footer from '../components/Footer';
import Foundation from '../components/Foundation';
const Home = () => {
  // const [panels, setPanels] = useState([]);
  // const [totalRaised, setTotalRaised] = useState(0);
  // const [totalPanels, setTotalPanels] = useState(0);
  // const [remainingPanels, setRemainingPanels] = useState(0);

  // useEffect(() => {
  //   axios.get('/solar-panels')
  //     .then(response => {
  //       setPanels(response.data);
  //       const total = response.data.reduce((sum, panel) => sum + panel.amount, 0);
  //       setTotalRaised(total);
  //       setTotalPanels(3090);
  //       setRemainingPanels(863);
  //     });
  // }, []);

  // const handleDonate = (quantity) => {
  //   const panel = panels.find(p => p.quantity === quantity);
  //   alert(`Donated ${quantity} panel(s) for $${panel.amount}`);
  // };

  return (
  <div id='' className=" mx-auto ">
    {/* <ThemeCard/> */}
    <Foundation/>
    <ProjectGallery />
    {/* <Footer/> */}
    
</div>
  );
};

export default Home;