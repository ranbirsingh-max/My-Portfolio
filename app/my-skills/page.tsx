"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
    style={{
        backgroundImage: "url(https://rare-gallery.com/mocahbig/393244-sunset-sky-night-scenery-digital-art-4k-pc-wallpaper.jpg)",
        backgroundSize: "cover",  // Ensure the image covers the container
        backgroundPosition: "center",  // Center the image
        height: "100vh",  // Set height to 100% of the viewport height
        width: "100%",  // Set width to 100% of the container
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }} >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">

        {/* Original styling for larger screens */}
        <div className="hidden md:flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>

        {/* Updated styling for medium screens */}
        <div className="md:hidden flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-4xl">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-lg">
            Using the latest tech this world has to offer
          </p>
        </div>

        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
