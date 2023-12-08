import { FaHome } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { MdChair } from "react-icons/md";
import "./Sidebar.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickoustSide";

const Sidebar = ({ open, close }) => {
  const ref = useClickOutside(() => {
    if (open) {
      close();
    }
  }, 100);
  const isOpen = {
    left: open ? "0px" : "-400px",
  };
  return (
    <div className="sidebar z-2" ref={ref} style={isOpen}>
      <div className="my-3 me-2">
        <IoCloseCircleOutline
          size={40}
          title="Close"
          className="float-end"
          cursor="pointer"
          onClick={close}
        />
      </div>
      <ul>
        <li>
          <Link to="/" className="link">
            <FaHome size={20} />
            Home
          </Link>
        </li>

        <li>
          <Link to="/menu" className="link">
            <BiSolidFoodMenu size={20} />
            Menu
          </Link>
        </li>
        {/* <li>
          <Link to="/gallery" className="link">
            <GrGallery size={20} />
            Gallery
          </Link>
        </li> */}
        <li>
          <Link to="/events" className="link">
            <MdEvent size={20} />
            Events
          </Link>
        </li>
        <li>
          <Link to="/book-table" className="link">
            <MdChair size={20} />
            Book a Table
          </Link>
        </li>
        {/* <li>
          <Link to="/about" className="link">
            <CiCircleInfo size={20} />
            About
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
export default Sidebar;
