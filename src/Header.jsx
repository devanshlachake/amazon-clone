import React from "react";
import "./Header.css";
import Search from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* Logo */}
        <Search className="header_searchIcon"></Search>
      </div>

      <div className="header_nav">
        <Link to={"/login"}>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_optionOne">Hello, {user ? user.email : "Guest"}</span>
          <span className="header_optionTwo">{user ? "Sign Out" : "Sign In"}</span>
        </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket></ShoppingBasket>
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
