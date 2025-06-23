import React, { useState, useEffect } from 'react';
import sicon from '../assets/sicon.png';
import backgroundImage from '../assets/background.jpg'
import backgroundImage2 from '../assets/background2.jpg'
import backgroundImage3 from '../assets/background3.jpg'
  function ThemeCard({ panels, totalRaised, totalPanels, remainingPanels, onDonate }) {
    const [background, setBackground] = useState('/storage/images/default-background.jpg'); // Default image

    // useEffect(() => {
    //   fetch('/api/images/main_background')
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.path) {
    //         const cleanPath = data.path.replace(/\\/g, '/');
    //         setBackground(`/storage/${cleanPath}`);
    //       }
    //     })
    //     .catch(error => console.error('Error fetching background:', error));
    // }, []);
    useEffect(() => {
  fetch('/api/images/main_background')
    .then(response => response.json())
    .then(data => {
      if (data.path) setBackground(`/storage/${data.path}?t=${Date.now()}`);
    })
    .catch(error => console.error('Error fetching background:', error));
}, []);

    return (
      <div>
        <div className="relative w-full border-b-50 border-[#6ba843]">
          <img src={backgroundImage2} alt="Solar Background" className="w-full h-170 object-cover" />
          <div className="absolute top-20 pl-20 w-full grid grid-rows-2 content-center text-white">
            <h1 className="text-8xl font-bold mb-4">Powering a<br /> Sustainable Future<br /> with Solar Energy</h1>
            <p className="text-4xl mb-4 font-light">Join us in building a brighter future for The Indian Hill School District by donating.<br />
              Your support helps power sustainable energy solutions for our schools.<br />
              Together, we can create a greener and more prosperous community.<br />
              Every contribution brings us closer to a sustainable tomorrow!</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4 text-center ">
          <div className='grid grid-cols-2 gap-1'>
            <div className="flex flex-col items-center bg-yellow-50 py-10 rounded-lg">
              <div className='flex'>
                <img src={sicon} alt="Solar Panel Icon" className="w-16 h-16" />
                <div className='flex flex-col text-start'>
                  <span className="text-7xl font-bold">{totalPanels}</span>
                  <span className="text-3xl font-light"><strong>Total Panels</strong></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center bg-green-50 py-10 rounded-lg">
              <div className='flex'>
                <img src={sicon} alt="Solar Panel Icon" className="w-16 h-16" />
                <div className='flex flex-col text-start'>
                  <span className="text-7xl font-bold text-[#6ba843]">{remainingPanels}</span>
                  <span className="text-3xl font-light text-[#6ba843]"><strong>Panels Remaining</strong></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-green-50 py-10 rounded-lg">
            <span className="text-6xl font-bold">Total ${totalRaised.toFixed(2)}</span>
            <div className="w-full mt-2">
              <progress className="w-full h-2 bg-gray-200" value={totalRaised} max={1500000}></progress>
            </div>
            <span className="text-lg mt-1">${(totalRaised * 0.68).toFixed(0)},000 Raised</span>
            <span className="text-lg text-[#6ba843]">{((totalRaised / 1500000) * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>
    );
  }

  export default ThemeCard;
