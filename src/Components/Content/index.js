import { IoSettingsOutline } from "react-icons/io5";
import { BiImport } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { RiRefreshLine } from "react-icons/ri";
import { TiArrowUnsorted, TiArrowSortedDown } from "react-icons/ti";
import OrderDetails from "../OrderDetails";
import Pagination from "../Pagination";

import "./index.css";

const Content = () => (
  <div className="content-container">
    <div className="part-1">
      <div className="order-cross-container">
        <p className="order-heading">Orders</p>
        <p className="cross">x</p>
      </div>
      <IoSettingsOutline />
    </div>
    <div className="part-2">
      <h1 className="pending-heading">Pending</h1>
      <h1 className="part-2-heading">Accepted</h1>
      <h1 className="part-2-heading">AWB Created</h1>
      <h1 className="part-2-heading">Ready to Ship</h1>
      <h1 className="part-2-heading">Shipped</h1>
      <h1 className="part-2-heading">Completed</h1>
    </div>
    <div className="part-3">
      <div className="part-3-first-container">
        <div className="part-3-logo-text">
          <div className="logo-text-container-1">
            <BiImport className="icon" />
            <p className="text">Import Orders</p>
          </div>
          <div className="logo-text-container-2">
            <FaArrowRight className="icon" />
            <p>Accept</p>
          </div>
          <div className="logo-text-container-2">
            <AiFillPrinter className="icon" />
            <p>Print</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="logo-text-container-3">
          <RiRefreshLine className="icon-refresh" />
          <p>Refresh</p>
        </div>
      </div>
      <div className="part-3-second-container">
        <div className="part-3-second-logo-container">
          <input type="checkbox" />
          <div className="part-3-second-logo-container-1">
            <p>Channel</p>
            <TiArrowUnsorted />
            <TiArrowSortedDown />
          </div>
          <p className="order-no">Order No</p>
          <div className="part-3-second-logo-container-2">
            <TiArrowUnsorted />
            <IoIosSearch className="icons-border" />
            <p>Order Date</p>
          </div>
          <div className="part-3-second-logo-container-2">
            <TiArrowUnsorted />
            <IoIosSearch className="icons-border" />
            <p>City</p>
          </div>
          <div className="part-3-second-logo-container-2">
            <TiArrowUnsorted className="icons-border" />
            <p>Customer Name</p>
          </div>
          <div className="part-3-second-logo-container-2">
            <IoIosSearch className="icons-border" />
            <p>Order Value</p>
          </div>
          <div className="part-3-second-logo-container-2">
            <TiArrowUnsorted className="icons-border" />
            <p>Status</p>
          </div>
          <div className="part-3-second-logo-container-2">
            <TiArrowUnsorted className="icons-border" />
            <p>Operation</p>
          </div>
        </div>
      </div>
      <div className="part-3-third-container">
        <OrderDetails orderNo="#TKN20203754" />
        <OrderDetails orderNo="#TKN20203753" />
        <OrderDetails orderNo="#TKN20203752" />
      </div>
      <div className="part-4">
        <Pagination />
      </div>
    </div>
  </div>
);

export default Content;
