import logo from "./../../assets/darkLogo.png";
import { Link } from "react-router-dom";
import { FaGlobe, FaShoppingCart, FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-list">
          <div className="nav-left">
            <Link to="/" className="nav-item">
              Store
            </Link>
            <Link to="/help" className="nav-item">
              Help
            </Link>
            <Link to="/about" className="nav-item">
              About
            </Link>
            <input
              type="search"
              placeholder="search product "
              className="input-search"
            />
          </div>
          <div className="nav-right">
            <Link to="/signin" className="user-section">
              <div className="nav-item">
                <FaUser />
              </div>
              <div className="nav-item sign-in">
                <div style={{ fontSize: "12px" }}>Welcome</div>
                <div>SIGN IN / REGISTER</div>
              </div>
            </Link>
            <div className="nav-item">
              <FaGlobe />
            </div>
            <div className="nav-item">
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
