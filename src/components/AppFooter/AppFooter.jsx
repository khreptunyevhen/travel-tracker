import styles from "./AppFooter.module.css";

function AppFooter() {
  return (
    <footer>
      <p>
        &copy; Copyright {new Date().getFullYear()} by Around the world Inc.
      </p>
    </footer>
  );
}

export default AppFooter;
