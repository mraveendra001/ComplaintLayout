import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-60 max-h-max bg-gray-900 text-white">
      {/* <h2 className="text-lg font-bold text-white uppercase p-4">My Navigation Bar</h2> */}
      <ul className="list-none p-0">
      <Link to="/view-complaints">
        <li className="px-4 py-6 hover:bg-gray-700 font-bold">VIEW COMPLAINTS</li>
        </Link>
        <li className="px-4 py-6 hover:bg-gray-700 font-bold">VIEW REPORTS</li>
        <li className="px-4 py-6 hover:bg-gray-700 font-bold">VIEW SOMETHING</li>
        <li className="px-4 py-6 hover:bg-gray-700 font-bold">View SOMETHING</li>
        <li className="px-4 py-6 hover:bg-gray-700 font-bold">View SOMETHING</li>
      </ul>
    </div>
  );
}

export default Sidenav;