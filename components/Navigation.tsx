"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <>
      {isRouting && <Transition />}

      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: 50,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          background: "black",
          padding: "15px",
          borderTop: "2px solid white",
        }}
      >
        {NavLinks.map((nav) => (
          <Link key={nav.name} href={nav.link}>
            <div className="pl-4">
              <nav.icon
                className={`w-[20px] h-[2opx] ${
                  path === nav.name ? "text-purple-800" : "text-white"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
