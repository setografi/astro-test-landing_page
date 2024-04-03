import React, { useState } from "react";

function HeaderEvent() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 flex items-center justify-center p-2 lg:p-4 bg-BlackText h-full z-20">
        <div
          className="text-WhiteBack text-3xl font-medium cursor-pointer duration-300 transition-all hover:scale-125"
          onClick={handleOpen}
        >
          <i className="ri-more-2-line"></i>
        </div>

        <div
          className={`absolute top-14 right-0 lg:hidden bg-rich-black-fogra-39 bg-opacity-90 backdrop-blur-sm w-full h-screen transition-all duration-700 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <nav className="w-full lg:flex items-center p-6">
            <ul className="flex flex-col items-start mx-auto gap-7 py-5">
              <li>
                <a
                  href="#home"
                  className="text-WhiteBack text-base font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                  data-nav-link
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-WhiteBack text-base font-medium uppercase p-2 duration-300 transition hover:text-Camel"
                  data-nav-link
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderEvent;
