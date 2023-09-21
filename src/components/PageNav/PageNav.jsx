import { NavLink, Link } from "react-router-dom";

import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

function PageNav() {
  return (
    <div className="container">
      <nav className={styles.pageNav}>
        <Logo />

        <ul>
          <li>
            <NavLink to={"/product"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"/how-it-works"}>How it works</NavLink>
          </li>
          <li>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
