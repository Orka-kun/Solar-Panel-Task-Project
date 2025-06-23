import React, { useState, useEffect } from 'react';
import logoImage from '../assets/header-logo.jpg'
  const Header = () => {
    const [headerLogo, setHeaderLogo] = useState('/storage/images/default-header-logo.jpg'); // Default image

    // useEffect(() => {
    //   fetch('/api/images/header_logo')
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.path) {
    //         // Clean up the path by replacing \/ with /
    //         const cleanPath = data.path.replace(/\\/g, '/');
    //         setHeaderLogo(`/storage/${cleanPath}`);
    //       }
    //     })
    //     .catch(error => console.error('Error fetching header logo:', error));
    // }, []);
    useEffect(() => {
  fetch('/api/images/header_logo')
    .then(response => response.json())
    .then(data => {
      if (data.path) setHeaderLogo(`/storage/${data.path}?t=${Date.now()}`);
    })
    .catch(error => console.error('Error fetching header logo:', error));
}, []);

    const handleGalleryClick = (e) => {
      e.preventDefault();
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <header className="bg-white text-black relative">
        <div className="flex justify-between w-full border-b-6 border-[#6ba843] py-4">
          <div className="flex items-center pl-20">
            <img src={logoImage} alt="Indian Hill Foundation Logo" className="h-35 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] absolute top-[-0.5px] z-10" />
          </div>
          <nav className="font-bold text-2xl pr-20">
            <div className="flex justify-end gap-x-5">
              <a href="/" className="mr-4">The Foundation</a>
              <a href="" onClick={handleGalleryClick} className="mr-4">Gallery</a>
              <a href="/about" className="mr-4">About Solar</a>
              <a href="https://drive.google.com/file/d/1YpFqeUyhajUAy6mi9Gw5Ibfn4o0rd0s2/view?usp=sharing" className="mr-4">FAQs</a>
              <a href="/checkout" className="mr-4">Checkout</a>
            </div>
          </nav>
        </div>
      </header>
    );
  };

  export default Header;
