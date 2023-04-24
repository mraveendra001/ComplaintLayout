import React from "react";

const Head = () => {
  return (
    <div>
      <header className="flex justify-between items-center bg-gray-100 p-6">
        <img
          className="w-72 h-20"
          alt="jyothylabs logo"
          src="https://www.jyothylabs.com/wp-content/themes/twentynineteen-child/images/logo.png"
        />
        <nav className="mr-16">
          <ul className="flex text-lg font- space-x-8">
            <li>About Us</li>
            <li>Our Brands</li>
            <li>Our Approach</li>
            <li>Investor</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Head;
