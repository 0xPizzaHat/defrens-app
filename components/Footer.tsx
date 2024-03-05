import React from "react";
import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";

const handleClick = () => {
  window.location.replace('https://twitter.com/frensdegens');
};

const Click = () => {
  window.location.replace('https://social.frensdegens.com');
};


const Footer = () => {
  return (
    <footer
     /* style={{
        width: "100%",
        fontFamily: "Roboto",
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        padding: "1rem 2rem",
        marginTop: "auto", // Push the footer to the bottom of the container
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }} */
      className="font-poppins bg-black text-white w-full py-4 px-8 mt-auto flex flex-col lg:flex-row justify-between">

      <div className="text-left">
      <p>&copy; 2024 <b>frensdegens/</b> - All rights reserved.</p>
      <p><a href="https://twitter.com/0xpizzahat" className="font-burgerFont text-yellow-300">Pizza🍕</a> was heare!</p>
      </div>

      <div className="flex flex-row mt-5 lg:mt-0">
      <img src="twitterlogo.png" alt="twitter"
        onClick={handleClick}
        className="cursor-pointer size-10"/>
        <img src="logopark.png" alt="park-defrens"
        onClick={Click}
        className="cursor-pointer size-10 ml-3"/>
      </div>
    </footer>
  );
};

export default Footer;