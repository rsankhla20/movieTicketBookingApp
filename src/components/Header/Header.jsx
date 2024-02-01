import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-list">
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link className="link" to={"/booked-tickets"}>
            Booked-Tickets
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
