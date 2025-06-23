import React, { useState, useEffect } from 'react';
import projectImage1 from '../assets/project1.jpg'
import projectImage2 from '../assets/project2.jpg'

  const ProjectGallery = () => {
    const [project1, setProject1] = useState('/storage/images/default-project1.jpg'); // Default image
    const [project2, setProject2] = useState('/storage/images/default-project2.jpg'); // Default image

    // useEffect(() => {
    //   fetch('/api/images/gallery_1')
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.path) {
    //         const cleanPath = data.path.replace(/\\/g, '/');
    //         setProject1(`/storage/${cleanPath}`);
    //       }
    //     })
    //     .catch(error => console.error('Error fetching gallery image 1:', error));
    //   fetch('/api/images/gallery_2')
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.path) {
    //         const cleanPath = data.path.replace(/\\/g, '/');
    //         setProject2(`/storage/${cleanPath}`);
    //       }
    //     })
    //     .catch(error => console.error('Error fetching gallery image 2:', error));
    // }, []);
   useEffect(() => {
  fetch('/api/images/gallery_1')
    .then(response => response.json())
    .then(data => {
      if (data.path) setProject1(`/storage/${data.path}?t=${Date.now()}`); // cache-busting here
    })
    .catch(error => console.error('Error fetching gallery image 1:', error));
  fetch('/api/images/gallery_2')
    .then(response => response.json())
    .then(data => {
      if (data.path) setProject2(`/storage/${data.path}?t=${Date.now()}`); // cache-busting here
    })
    .catch(error => console.error('Error fetching gallery image 2:', error));
}, []);

    return (
      <div id="gallery" className="container mx-auto py-30">
        <h2 className="text-4xl font-semibold mb-4 py-10">Project Gallery:</h2>
        <div className="grid grid-cols-2 gap-14">
          <img src={projectImage1} alt="Project 1" className="w-full h-100 object-cover rounded-2xl" />
          <img src={projectImage2} alt="Project 2" className="w-full h-100 object-cover rounded-2xl" />
        </div>
      </div>
    );
  };

  export default ProjectGallery;
