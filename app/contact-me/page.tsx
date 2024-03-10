"use client"
import ContactForm from "@/components/ContactForm";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    
    <div
    style={{
      backgroundImage: isSmallScreen
        ? "url(https://i.pinimg.com/1200x/b6/a2/12/b6a2123556123fe0a82539f0ed0dd49f.jpg)" // Replace with the appropriate small screen image
        : "url(https://4kwallpapers.com/images/walls/thumbs_3t/6657.jpg)",
    }}
    className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
  >
        

        <div
        className="h-[60%] w-[80%] md:w-[70%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%] relative bg-cover bg-center rounded-xl border border-white"
        style={{
          backgroundImage: isSmallScreen
            ? "url()" // Replace with the appropriate small screen image
            : "url(atombg-comp.webp)",
        }}
      >
        <div className="absolute left-4 md:left-20 bottom-7 md:bottom-18 w-full md:w-[70%] xl:w-[50%] 2xl:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
