import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { FaGlassCheers } from "react-icons/fa";
import "./Header.css";
import { FaOpencart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import useCartStore from "../../hooks/Strore/Store";
import { useNavigate } from "react-router";

const Header = ({ open }) => {
  const product = useCartStore((state) => state.product);
  const navigate  = useNavigate();
  return (
    <div>
      <Navbar sticky="true" dark>
        <Nav className="me-auto" navbar>
          <FaGlassCheers
            color="white"
            cursor="pointer"
            title="Menu"
            onClick={open}
            className="menu-logo"
          />
        </Nav>
        <div className="d-flex align-items-center p-md-3">
          <NavbarBrand className="brand-text" href="/">
            MingleMug.com
          </NavbarBrand>
          <button type="button" className="btn btn-dark position-relative mt-2" onClick={() => navigate("/cart")}>
            <FaOpencart title="Cart" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {product.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
