import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-12 ">
        <ul className="flex gap-6 font-lato text-gray-400">
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>

        <div className="flex gap-2">
          <img src="./assets/Help-Avatar.svg" alt="mino" />
          <div>
            <p className="font-playfair font-thin text-gray-400">
              Have any questions?
            </p>
            <a className=" font-lato font-bold" href="http://">
              Talk to specialist
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
