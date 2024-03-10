// Page.tsx
"use client"
import React, { useEffect, useState } from 'react';

import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';

const Page = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    <div
    className='w-screen min-h-screen flex items-center justify-center bg-center bg-cover overflow-y-auto'
    style={{
      backgroundImage: isSmallScreen
        ? "url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlMTVfYmVhY2hfcmlzb2dyYXBoX2hhbGZ0b25lX3NpbXBsZV92aWJyYW5jZV9mdWxsX18zZDQxYWJlNS0yNWJhLTQ0ZTItYWM4Ni1mNjAwNGFhOGVmMTVfMS5qcGc.jpg)" // Replace with the appropriate small screen image
        : "url(https://4kwallpapers.com/images/walls/thumbs_3t/9466.jpg)",
    }}
  >
     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[90%] p-5'>
  {Projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      text={project.text}
      image={project.src}
      isSmallScreen={isSmallScreen} // Pass isSmallScreen as a prop
    />
  ))}
</div>
    </div>
  );
};

export default Page;

