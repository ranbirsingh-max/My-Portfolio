"use client"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-[1.1rem] lg:text-1xl font-bold mb-5 text-white p-2.5">
        Slide into my digital DMs on these{' '}
        <span className="text-green-400">core values</span> –where ideas spark{' '}, and conversations sizzle
      </h2>
      <div className="mb-5 flex items-center lg:space-x-4">
        <a
          href="https://github.com/ranbirsingh-max"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-base font-bold text-blue-500 hover:text-blue-400"
        >
          GitHub
        </a>
        <FaGithub className="ml-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8" />
      </div>
      <div className="mb-5 flex items-center lg:space-x-4">
        <a
          href="mailto:charakranbirsingh@gmail.com"
          className="text-lg sm:text-base font-bold text-blue-500 hover:text-blue-400"
        >
          Email
        </a>
        <MdMailOutline className="ml-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8" />
      </div>
      <div className="mb-5 flex items-center lg:space-x-4">
        <a
          href="https://www.linkedin.com/in/ranbir-singh-4b8b59188/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-base font-bold text-blue-500 hover:text-blue-400"
        >
          LinkedIn
        </a>
        <FaLinkedin className="ml-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8" />
      </div>
      <button className="px-6 py-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-black hover:bg-green-300 lg:text-lg lg:px-3 lg:py-1 rounded-full hidden sm:block">
    Click icons, send messages – effortlessly stylish!
</button>


    </form>
  );
}; 

export default ContactForm;