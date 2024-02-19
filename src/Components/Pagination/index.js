import "./index.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";

const Pagination = () => (
  <>
    <div className="arrow">
      <IoIosArrowBack />
    </div>
    <div className="page-number">
      <p>1</p>
    </div>
    <div className="arrow">
      <IoIosArrowForward />
    </div>
    <div className="total-pages">
      <p>20 / Page</p>
      <IoIosArrowDown className="arrow-icon" />
    </div>
  </>
);

export default Pagination;
