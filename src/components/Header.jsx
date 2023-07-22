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

      <div className="profile__container"></div>
    </div>
  </header>
);

export default Header;
