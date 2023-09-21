import TrackerList from "../../components/TrackerList/TrackerList";
import WorldMap from "../../components/WorldMap/WorldMap";

import styles from "./AppPage.module.css";

function AppPage() {
  return (
    <main>
      <section className={styles.app}>
        <TrackerList />
        <WorldMap />
      </section>
    </main>
  );
}

export default AppPage;
