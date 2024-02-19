import "./index.css";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const OrderDetails = (props) => {
  const { orderNo } = props;

  return (
    <div className="part-3-order-details">
      <div className="plus-icon">
        <p>+</p>
      </div>
      <div className="part-3-order-row">
        <input type="checkbox" />
        <FaDollarSign />
        <p className="order-code">{orderNo}</p>
        <p className="text">2022-05-4</p>
        <p className="text">Lucknow</p>
        <p className="text">Abhishek Dixit</p>
        <p className="text">0.00</p>
        <div className="pending">Pending</div>
        <div className="action-operation">
          <p>Action</p>
          <IoIosArrowDown className="down-arrow" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
