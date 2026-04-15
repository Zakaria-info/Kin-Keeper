import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you use react-router-dom
import homeimg from '../../../assets/Vector.png';
import clockImg from "../../../assets/Clock.png";
import statsImg from "../../../assets/ChartLine.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#244D3F]! text-white! h-12 px-6 flex items-center gap-2 rounded-lg"
              : "text-[#64748B] h-12 px-6 flex items-center gap-2 hover:bg-transparent"
          }
        >
          <img src={homeimg} alt="Home" className="w-5 h-5" />
          <span className="font-medium">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive
              ? "bg-[#244D3F]! text-white! h-12 px-6 flex items-center gap-2 rounded-lg"
              : "text-[#64748B] h-12 px-6 flex items-center gap-2 hover:bg-transparent"
          }
        >
          <img src={clockImg} alt="Timeline" className="w-5 h-5" />
          <span className="font-medium">Timeline</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive
              ? "bg-[#244D3F]! text-white! h-12 px-6 flex items-center gap-2 rounded-lg"
              : "text-[#64748B] h-12 px-6 flex items-center gap-2 hover:bg-transparent"
          }
        >
          <img src={statsImg} alt="Stats" className="w-5 h-5" />
          <span className="font-medium">Stats</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto max-w-400">
        <div className="navbar h-20 px-4 md:px-8 flex justify-between items-center">
          
          {/* Left Side: Logo */}
          <div className="flex-none">
            <div className="flex items-center w-35 h-8 text-2xl font-bold tracking-tight">
              <span className="text-[#1F2937]">Kin</span>
              <span className="text-[#244D3F]">Keeper</span>
            </div>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0 gap-4">
              {links}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;