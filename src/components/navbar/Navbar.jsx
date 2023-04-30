import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user , dispatch} = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HOTEL BOOKING.</span>
        </Link>
        {user ? (
          <div className="navItems">
            <button className="navButton" onClick={() => setOpenModal(true)}>
              {user.username}
            </button>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <button className="navButton" onClick={handleClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
