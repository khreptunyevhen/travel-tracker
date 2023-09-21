import { Link } from "react-router-dom";
import styles from "./HomeContent.module.css";

function HomeContent() {
  return (
    <section className={styles.content}>
      <p className={styles.subtitle}>Welcome</p>
      <h1>Explore New Horizonts & Discover the world</h1>
      <p className={styles.description}>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </p>
      <Link to="/app">
        <button>Start tracking</button>
      </Link>
    </section>
  );
}

export default HomeContent;
