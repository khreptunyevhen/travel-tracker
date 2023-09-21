import HomeContent from "../../components/HomeContent/HomeContent";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.home}>
      <PageNav />
      <HomeContent />
    </main>
  );
}

export default Home;
