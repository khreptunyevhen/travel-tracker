import { useSearchParams } from "react-router-dom";
import styles from "./WorldMap.module.css";

function WorldMap() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  return (
    <div className={styles.map}>
      WorldMap lat: {lat}, lng: {lng}
    </div>
  );
}

export default WorldMap;
