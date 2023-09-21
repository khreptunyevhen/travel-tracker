import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.logo} to="/">
      A.World
    </Link>
  );
}

export default Logo;
