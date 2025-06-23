import React, { useState } from 'react';
import DonationCard from './DonationCard';
import ProjectGallery from './ProjectGallery';

const Footer = () => {
  const [panels, setPanels] = useState([]);
  const handleDonate = (quantity) => {
    const panel = panels.find(p => p.quantity === quantity);
    alert(`Donated ${quantity} panel(s) for $${panel.amount}`);
  };
  return (
  <>
    {/* <div className="text-center mb-4">
      <h2 className="text-2xl font-bold">Build a Brighter Future:</h2>
      <p>Select Your Solar Impact</p>
      {panels.map(panel => (
        <DonationCard key={panel.id} quantity={panel.quantity} amount={panel.amount} onDonate={handleDonate} />
      ))}
      <button className="bg-green-500 text-white p-2 rounded mt-2">Choose Custom Quantity</button>
      <button className="bg-red-500 text-white p-2 rounded mt-2">GO TO CHECKOUT</button>
    </div> */}
  {/* <ProjectGallery /> */}
    <footer className="bg-[#6ba843] text-white p-4 text-center">
      <p>Powered by Melink Solar</p>
    </footer>
    </>
  );
};

export default Footer;