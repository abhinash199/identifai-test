// Header.js
import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Header = ({ isMenuOpen, toggleMenu }) => {
  // Ref to detect clicks outside the menu
  const menuRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    };

    if (isMenuOpen) {
      // Prevent body scrolling when menu is open
      document.body.classList.add("no-scroll");

      // Add event listener for clicks outside the menu
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Re-enable body scrolling when menu is closed
      document.body.classList.remove("no-scroll");
      
      // Remove event listener for clicks outside the menu
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Company Logo" />
      </div>
      <nav ref={menuRef} className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="close">
            <IoMdClose size={24} onClick={toggleMenu} />
          </li>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#product" onClick={toggleMenu}>
              Product
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {!isMenuOpen && <RxHamburgerMenu size={24} />}
      </div>
    </header>
  );
};

export default Header;
