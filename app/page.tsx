"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    <main className="w-screen h-screen relative">
  <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: isSmallScreen
            ? "url(https://i.pinimg.com/1200x/42/4f/4e/424f4eed28a60a3892ff4dc4e8e56564.jpg)" // Replace with the appropriate small screen image
            : "url(https://4kwallpapers.com/images/walls/thumbs_3t/10044.png)",
        }}
      >
     <div className="pl-5 md:pl-20 lg:pl-40 pb-5 md:pb-20 flex flex-col gap-2 z-[10] max-w-[750px]">
  <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold mb-2 md:mb-4 mt-0 md:mt-4">
    Hey, Ranbir here! Crafting web dreams and
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
      {" "}
      turning ideas into reality.
    </span>
  </h1>
  <p className="text-white text-sm md:text-base opacity-90 font-bold">
  Transform your code into a digital melody, where every keystroke creates a symphony of innovation. 🎵✨
</p>

  
  {/* Add styles specific to medium screens */}
  <style jsx>{`
    @media (max-width: 768px) {
      h1 {
        padding: 1rem;
        font-size: 1.5rem; /* Adjust the font size for medium screens */
        margin-top: -10rem; /* Move the title to the top of the screen */
        flex-wrap: wrap; /* Allow the title to wrap onto multiple lines */
      }
      p {
        padding: 4rem; /* Add padding to the paragraph */
        margin-top:-2rem;
        flex-wrap: wrap;
      }
    }
  `}</style>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden  py-3 gap-3 ">
        <Link
          href="/my-skills" 
          className="rounded-[20px] group bg-blue-500 px-5 py-2 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-2 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-2 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
  {/* Images for Medium and Large Screens */}
  <div className="hidden md:block">
    <Image
      src="/horse.png"
      alt="horse"
      height={300}
      width={300}
      className="absolute top-40 right-55 object-cover"
      style={{ maxWidth: '100%' }}
    />

    <Image
      src="/cliff.webp"
      alt="cliff"
      width={480}
      height={480}
      className="object-cover"
      style={{ maxWidth: '100%' }}
    />
  </div>

  {/* Images for Small Screens */}
  <div className="block md:hidden">
    <Image
      src="/horse.png"  // Replace with the appropriate small image
      alt="horse"
      height={250}  // Adjust the height for small screens
      width={250}   // Adjust the width for small screens
      className="absolute bottom-25 right-15 object-cover"
      style={{ maxWidth: '100%' }}
    />

<Image
      src="/cliff.webp"  // Replace with the appropriate small image
      alt="cliff"
      width={250}   // Adjust the width for small screens
      height={200}  // Adjust the height for small screens
      className="object-cover"
      style={{ maxWidth: '100%' }}
    />
  </div>
</div>
  

<Image
  src="/stars.png"
  alt="stars"
  height={300}
  width={300}
  className="absolute top-0 left-0 z-[10] object-cover"
  style={{ maxWidth: '100%' }}
/>


    </main>
  );
}