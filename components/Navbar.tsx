// Import the necessary modules
import Head from 'next/head';
import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Set the viewport meta tag */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Your existing Navbar component */}
      <div className="fixed top-0 z-[40] w-full bg-transparent flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-20">
        <div className="flex items-center w-full md:w-auto">
          <div className="relative">
            {<Image src="/horseLogo.jpg" alt="logo" width={40} height={40} className="w-full h-full object-contain rounded-full" />}
          </div>
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-semibold ml-3">
            Ranbir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {' '}
              Singh{' '}
            </span>
          </h1>
        </div>

        <div className="flex ml-auto gap-2">
          {Socials.map((social) => (
            <Image key={social.name} src={social.src} alt={social.name} width={28} height={28} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
