import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div>
      <Link to="cities">cities</Link>
      <Link to="countries">countries</Link>
    </div>
  );
}

export default AppNav;
