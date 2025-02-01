import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavbarComp() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isActiveColor, setIsActiveColor] = useState(null);

  const navigationItems = [
    {
      text: "Branda",
      href: "/",
    },
    {
      text: "Bahasa Sasak",
      href: "/bahasa-sasak",
    },
    {
      text: "Cerita Rakyat",
      href: "/cerita-rakyat",
    },
    {
      text: "Adat & Budaya",
      href: "adat-budaya",
    },
    {
      text: "Museum",
      href: "/museum",
    },
    {
      text: "Event",
      href: "/event",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuHidden((prev) => !prev);
  };

  useEffect(() => {
    // Add event listeners
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    backdrop.forEach((item) =>
      item.addEventListener("click", handleMenuToggle)
    );

    // Clean up event listeners on component unmount
    return () => {
      backdrop.forEach((item) =>
        item.removeEventListener("click", handleMenuToggle)
      );
    };
  }, []);
  return (
    <>
      <nav className=" relative px-4 py-4 flex justify-between items-center shadow-2xl">
        <a className="text-3xl font-bold leading-none" href="#">
          Pemanikan
        </a>
        <div className="lg:hidden">
          <button
            className="flex items-center text-amber-600 text-2xl font-bold border p-2 rounded-xl"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}
        >
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              <li onClick={() => setIsActiveColor(index)}>
                <Link
                  className={`text-sm ${
                    isActiveColor === index
                      ? "text-amber-600 font-bold"
                      : "text-gray-400"
                  }  hover:text-gray-500`}
                  to={item.href}
                >
                  {item.text}
                </Link>
              </li>
              {index < navigationItems.length - 1 && (
                <li className="text-gray-300">
                  <BsThreeDotsVertical />
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>

        <a
          className="hidden lg:inline-block py-2 px-6 bg-amber-500 hover:bg-gray-700 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Login
        </a>
      </nav>
      <div
        className={`navbar-menu relative z-50 ${
          isMenuHidden
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white shadow-2xl overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link
              className="mr-auto text-3xl font-bold leading-none"
              to="/beranda"
            >
              Pemanikan
            </Link>
            <button className="navbar-close" onClick={handleMenuToggle}>
              <AiOutlineClose />
            </button>
          </div>
          <div>
            <ul>
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li onClick={() => setIsActiveColor(index)} className="mb-1">
                    <a
                      className={`block p-4 text-sm font-semibold ${
                        isActiveColor === index
                          ? "text-amber-600 font-bold"
                          : "text-gray-400"
                      } hover:bg-purple-50 hover:text-gray-600 rounded`}
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xm text-center text-white font-semibold bg-amber-600  hover:bg-gray-400  rounded-xl focus:bg-gray-500"
                href="#"
              >
                Login
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2025</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
