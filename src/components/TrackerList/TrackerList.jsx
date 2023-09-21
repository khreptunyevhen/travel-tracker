import { Outlet } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./TrackerList.module.css";
import AppNav from "../AppNav/AppNav";
import AppFooter from "../AppFooter/AppFooter";

function TrackerList() {
  return (
    <div className={styles.trackerList}>
      <div>
        <Logo />
        <AppNav />
      </div>
      <Outlet />
      <AppFooter />
    </div>
  );
}

export default TrackerList;
