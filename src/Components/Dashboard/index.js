import { AiOutlineDashboard, AiOutlineTag } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import "./index.css";

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="logo-heading-container">
      <AiOutlineDashboard className="icon" />
      <h3 className="heading">Dashboard</h3>
    </div>
    <div className="logo-heading-container">
      <AiOutlineTag className="icon" />
      <h3 className="heading">Inventory</h3>
    </div>
    <div className="orders-logo">
      <BsCardList className="order-icon" />
      <h3 className="ord-heading">Orders</h3>
    </div>
    <div className="logo-heading-container">
      <FaShippingFast className="icon" />
      <h3 className="heading">Shipping</h3>
    </div>
    <div className="logo-heading-container">
      <IoShareSocialOutline className="icon" />
      <h3 className="heading">Channel</h3>
    </div>
  </div>
);

export default Dashboard;
