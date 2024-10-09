import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              width: "0vw",
              height: "0vh",
              borderRadius: "70%",
            }}
            animate={{
              opacity: 1,
              width: "95vw",
              height: "90vh",
              borderRadius: "1rem",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={` flex items-center justify-between top-6 right-5 z-10 absolute bg-white`}
          >
            <div>
              <h1 className=" pl-20 text-orange-500 font-bold text-center text-7xl items-center">
              Brother,<br /> your work is <br />done
              </h1>
              <h3 className=" text-red-700 pl-20 font-bold text-center text-5xl items-center">
              give me my money
              </h3>
            </div>
            <div
              className=" w-[40vw]"
              style={{
                clipPath:
                  "polygon(100% 50%,84.67% 54.77%,98.15% 63.49%,82.1% 63.94%,92.72% 75.98%,77.15% 72.09%,84.13% 86.54%,70.18% 78.59%,73% 94.39%,61.72% 82.98%,60.17% 98.95%,52.39% 84.92%,46.59% 99.88%,42.88% 84.27%,33.26% 97.11%,33.9% 81.08%,21.17% 90.85%,26.11% 75.58%,11.21% 81.55%,20.1% 68.19%,4.14% 69.92%,16.3% 59.44%,0.47% 56.81%,15% 50%,0.47% 43.19%,16.3% 40.56%,4.14% 30.08%,20.1% 31.81%,11.21% 18.45%,26.11% 24.42%,21.17% 9.15%,33.9% 18.92%,33.26% 2.89%,42.88% 15.73%,46.59% 0.12%,52.39% 15.08%,60.17% 1.05%,61.72% 17.02%,73% 5.61%,70.18% 21.41%,84.13% 13.46%,77.15% 27.91%,92.72% 24.02%,82.1% 36.06%,98.15% 36.51%,84.67% 45.23%)",
              }}
            >
              <img
                src="https://i.ytimg.com/vi/sDHV-BDH1Eo/sddefault.jpg"
                alt=""
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="z-50 flex items-center justify-end">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={toggleMenu}
          className={`bg-white z-50 flex items-center rounded-full gap-4 px-1 py-1 transition-all duration-500 ${
            isOpen ? "w-16 h-16" : "w-auto"
          }`}
        >
          {/* Hamburger Icon */}
          <div className="flex z-50 w-10 items-center justify-end cursor-pointer">
            <div className="flex flex-col w-6 gap-[6px]">
              <div
                className={`h-[2px] w-full bg-black duration-300 origin-center ${
                  isOpen ? "rotate-[45deg] translate-y-1 " : ""
                }`}
              ></div>
              <div
                className={`h-[2px] w-full bg-black duration-300 origin-center ${
                  isOpen ? "-rotate-[45deg] -translate-y-1 " : ""
                }`}
              ></div>
            </div>
          </div>

          {!isOpen && (
            <div className="flex z-50 items-center justify-between gap-2 transition-all duration-500 ease-in-out">
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
                  isHover ? "max-w-[100px]" : "max-w-0"
                }`}
              >
                <h3
                  className={`font-semibold text-base transition-opacity duration-500 ${
                    isHover ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  MENU
                </h3>
              </div>

              <div className="bg-[#3ADD8A] rounded-full z-50 cursor-pointer overflow-hidden">
                <motion.img
                  animate={{ rotate: [0, 0, -40, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 2,
                    duration: 1,
                    ease: "linear",
                  }}
                  style={{ originX: 1 }}
                  src="https://www.bikebear.com.my/wp-content/uploads/2022/10/Mask-Group-34014.png"
                  alt="hand"
                  className="w-16 translate-y-10 z-50"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
