import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header>
    <div className="header__container">
      <div className="navbar__container">
        <h1 className="logo">Bookstore CMS</h1>
        <nav>
          <ul>
            <li className="books">
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="profile__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#0290ff"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </div>
  </header>
);

export default Header;
