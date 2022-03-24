import logo from "./../../assets/darkLogo.png";
import { Link } from "react-router-dom";
import { FaGlobe, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <nav>
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-list">
          {/* navbar Left side icons */}
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
            <div className="input-group">
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="input-field text-sm"
              />
            </div>
          </div>

          {/* Navbar Right Side icons */}

          <div className="nav-right">
            <Link to="/signin" className="user-section">
              <div className="nav-item">
                <FaUser />
              </div>
              <div className="nav-item sign-in text-xs">
                <div>Welcome</div>
                <div>SIGN IN / REGISTER</div>
              </div>
            </Link>
            <div className="nav-item ">
              <FaGlobe />
            </div>
            <div className="nav-item icon-badge ">
              <FaShoppingCart />
              <span className="badge">1</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
