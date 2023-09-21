import styles from "./HowItWorksContent.module.css";
import howItWorksImg from "/how-it-works.jpg";

function HowItWorksContent() {
  return (
    <section className={styles.content}>
      <div className={styles.image}>
        <img src={howItWorksImg} alt="travel" loading="lazy" />
      </div>
      <div className={styles.description}>
        <h1>How it works</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          fugit ratione molestiae dolor laboriosam molestias itaque ad error
          nesciunt quasi est aspernatur consequatur quisquam? Eaque commodi
          veritatis corrupti facere doloribus. Tempora illum molestias rem
          deserunt doloremque velit, ipsam voluptate ipsum tempore consequuntur
          debitis harum et ducimus incidunt expedita ad! Quidem vero quod quam
          doloribus aperiam sunt enim impedit corporis adipisci!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          fugit ratione molestiae dolor laboriosam molestias itaque ad error
          nesciunt quasi est aspernatur consequatur quisquam?
        </p>
      </div>
    </section>
  );
}

export default HowItWorksContent;
