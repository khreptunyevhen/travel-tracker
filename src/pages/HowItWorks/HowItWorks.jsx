import HowItWorksContent from "../../components/HowItWorksContent/HowItWorksContent";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <div className={styles.howWorks}>
      <PageNav />
      <HowItWorksContent />
    </div>
  );
}

export default HowItWorks;
