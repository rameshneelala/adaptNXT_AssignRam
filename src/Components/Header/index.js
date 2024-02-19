import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMoonOutline, IoLanguageSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
// import {} from 'react-icons/io5'

import "./index.css";

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img
        src="https://adaptnxt.com/wp-content/uploads/2023/11/adaptnxt-final_purple-rect-_19Nov-300x511-1.png"
        alt="AdaptNXT"
        className="logo"
      />
      <AiOutlineMenuFold />
    </div>
    <div className="icons-container">
      <IoMoonOutline />
      <FaBell />
      <IoLanguageSharp />
      <img
        src="https://media.licdn.com/dms/image/C4D0BAQGmYPnMsszKEw/company-logo_200_200/0/1630473113342/adaptnxt_logo?e=2147483647&v=beta&t=yg5-Yw26hRFMHgUY5tqZ-Pf1tPY6doA28e0-UI0c8q4"
        alt="avatar"
        className="image"
      />
    </div>
  </header>
);

export default Header;
