import styles from "./Product.module.css";

import PageNav from "../../components/PageNav/PageNav";
import ProductContent from "../../components/ProductContent/ProductContent";

function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <ProductContent />
    </main>
  );
}

export default Product;
